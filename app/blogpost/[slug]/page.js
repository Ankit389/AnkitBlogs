


import { content } from "@/tailwind.config";
import fs from "fs";
import matter from "gray-matter";
import rehypeDocument from 'rehype-document';
import rehypeFormat from 'rehype-format';
import rehypeStringify from 'rehype-stringify';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import { unified } from 'unified';
import { notFound } from "next/navigation";
import rehypePrettyCode from "rehype-pretty-code";
import { transformerCopyButton } from '@rehype-pretty/transformers';


// Debugging processor to log the AST before rehypePrettyCode
function consoleLogProcessor() {
  return (tree) => {
    console.log("AST Tree before rehypePrettyCode:", tree);
  };
}

export default async function Page({ params }) {
  const filepath = `content/${params.slug}.md`;
  if (!fs.existsSync(filepath)) {
    notFound();
    return;
  }

  const fileContent = fs.readFileSync(filepath, "utf-8");
  const { content, data } = matter(fileContent);

  const processor = unified()
    .use(remarkParse) // Parses the markdown content
    .use(remarkRehype) // Converts it to rehype AST (HTML representation)
    .use(consoleLogProcessor) // Logs the tree for debugging
    .use(rehypeDocument, { title: data.title }) // Optional dynamic title
    .use(rehypeFormat) // Formats the resulting HTML
    .use(rehypeStringify) // Converts it back to an HTML string
    .use(rehypePrettyCode, {
      theme: "github-dark",
      transformers: [
        transformerCopyButton({
          visibility: 'always',
          feedbackDuration: 3000,
        }),
      ],
    });

  // Process the content to HTML
  const htmlContent = (await processor.process(content)).toString();

  return (
    <div className="max-w-5xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">{data.title}</h1>
      <p className="text-base mb-2 border-1-4 border-gray-600 pl-4 italic">
        {data.description}
      </p>
      <div className="flex gap-2">
        <p className="text-sm text-gray-600 font-bold mb-4">By {data.author}</p>
        <p className="text-sm text-gray-600 mb-4">{data.date}</p>
      </div>
      <div dangerouslySetInnerHTML={{ __html: htmlContent }} className="prose dark:prose-invert"></div>
      
    </div>
  );
}
