
import { withAuth, NextRequestWithAuth } from 'next-auth/middleware';
import { NextResponse } from 'next/server';

export default withAuth(
    function middleware(request: NextRequestWithAuth) {
        const path = request.nextUrl.pathname;
        const role = request.nextauth.token?.role;

        // Define a mapping of paths to expected roles
        const pathToRoleMapping: any = {
            '/admin': 'admin',
            '/admin/eventos': 'admin',
            '/admin/validar': 'admin',
            '/admin/eventos/:path*': 'admin',
            '/admin/validaciones/:path*': 'admin',
            '/users': 'user',
            '/users/dashboard': 'user',
            '/users/login': 'user',
        };

        // Check if the path exists in the mapping and if the user's role matches
        if (pathToRoleMapping[path] && role !== pathToRoleMapping[path]) {
            return NextResponse.rewrite(new URL('/denied', request.url));
        }
        return NextResponse.next();
    },  
    {
        callbacks:{            
            authorized: ({ token }) => !!token
        }
    }
);

export const config = { 
    matcher: [
        '/admin', 
        '/admin/eventos', 
        '/admin/eventos/:path*',
        '/admin/validar', 
        '/users', 
        '/users/dashboard',
    ]
};