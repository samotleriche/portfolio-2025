interface CodeBlockProps {
  children: React.ReactNode;
  className?: string;
}

export default function CodeBlock({
  children,
  className = "",
}: CodeBlockProps) {
  return (
    <pre
      className={`bg-gray-800 rounded-lg p-4 overflow-x-auto border border-gray-700 ${className}`}
    >
      <code className="text-gray-100 text-sm">{children}</code>
    </pre>
  );
}
