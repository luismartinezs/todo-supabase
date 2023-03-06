import classnames from "classnames";
import { Inter } from "next/font/google";

import Header from "@/components/header";

const inter = Inter({ subsets: ["latin"] });

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className={classnames(inter.className, "container mx-auto")}>
      <Header />
      <main className="flex flex-col justify-start items-center p-2 min-h-screen">
        {children}
      </main>
    </div>
  );
}
