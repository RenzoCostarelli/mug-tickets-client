
import { withAuth, NextRequestWithAuth } from 'next-auth/middleware';
import { NextResponse } from 'next/server';

export default withAuth(
    function middleware(request: NextRequestWithAuth) {
        /*
        if(request.nextUrl.pathname.startsWith('/admin')
            && request.nextauth.token?.role !== 'admin') {
                return NextResponse.rewrite(
                    new URL('/denied', request.url)
                );
        }

        if(request.nextUrl.pathname.startsWith('/admin/eventos')
            && request.nextauth.token?.role !== 'admin') {
                return NextResponse.rewrite(
                    new URL('/denied', request.url)
                );
        }

        if(request.nextUrl.pathname.startsWith('/admin/validar')
            && request.nextauth.token?.role !== 'admin') {
                return NextResponse.rewrite(
                    new URL('/denied', request.url)
                );
        }

        if(request.nextUrl.pathname.startsWith('/users')
            && request.nextauth.token?.role !== 'user') {
                return NextResponse.rewrite(
                    new URL('/denied', request.url)
                );
        }

        if(request.nextUrl.pathname.startsWith('/users/dashboard')
            && request.nextauth.token?.role !== 'user') {
                return NextResponse.rewrite(
                    new URL('/denied', request.url)
                );
        }

        if(request.nextUrl.pathname.startsWith('/users/login')
            && request.nextauth.token?.role !== 'user') {
                return NextResponse.rewrite(
                    new URL('/denied', request.url)
                );
        }

        return NextResponse.next();*/
        const path = request.nextUrl.pathname;
        const role = request.nextauth.token?.role;

        // Define a mapping of paths to expected roles
        const pathToRoleMapping: any = {
            '/admin': 'admin',
            '/admin/eventos': 'admin',
            '/admin/validar': 'admin',
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
    matcher: ['/admin', '/admin/eventos', '/admin/validar', '/users', '/users/dashboard']
};