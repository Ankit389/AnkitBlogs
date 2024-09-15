export default function Page({ params }) {
    // return <div>My Post: {params.slug}</div>

    return (
        <div className="max-w-5xl mx-auto">
             <h1>Title</h1>
             <div dangerouslySetInnerHTML={{ __html: htmlContent }} className="prose dark:prose-invert"></div>
        </div>
    )
  }