export default function RoutePage({ params }: { params: { slug: string } }) {
    return (
        <div>
            <h1>Route: {params.slug}</h1>
        </div>
    );
}
