import { useState } from "react";
import { Code } from "lucide-react";
import CodeBlock from "@/components/Personal/CodeBlock";

interface ComponentDemoProps {
  children?: React.ReactNode;
  code: string;
  showCode?: boolean;
}

const ComponentDemo = ({
  children,
  code,
  showCode = false,
}: ComponentDemoProps) => {
  const [isCodeVisible, setIsCodeVisible] = useState(showCode);

  return (
    <div className="border border-gray-200 dark:border-gray-800 rounded-lg overflow-hidden shadow-sm bg-white dark:bg-gray-900">
      {/* Header Bar */}
      <div className="flex items-center justify-between px-4 py-2 border-b border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-800/50">
        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
          Preview
        </span>
        <button
          type="button"
          onClick={() => setIsCodeVisible(!isCodeVisible)}
          className="flex items-center gap-1.5 px-3 py-1 text-sm text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded transition-colors"
        >
          <Code size={14} />
          {isCodeVisible ? "Hide Code" : "View Code"}
        </button>
      </div>

      {/* Component Preview Container */}
      <div className="py-16 px-4 flex items-center justify-center min-h-[180px] bg-gray-50/50 dark:bg-gray-950/40 relative">
        {children}
      </div>

      {/* Code Block Container */}
      {isCodeVisible && (
        <div className="border-t border-gray-200 dark:border-gray-800">
          <CodeBlock code={code} />
        </div>
      )}
    </div>
  );
};

export default ComponentDemo;