import EventDetail from "../components/event-detail"

export default function Event({props}: any) {
    console.log('propsssss',props)
    return (
        <div>
            <EventDetail />
        </div>
    )
}