export default function BlogPage({ params }: { params: { slug: string } }) {
    return (
        <div>
            <h1>Blog post: {params.slug}</h1>
        </div>
    );
}
