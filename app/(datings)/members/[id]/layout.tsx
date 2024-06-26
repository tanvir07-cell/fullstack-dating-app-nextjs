import Sidebar from "@/components/Sidebar";
import { getMember } from "@/utils/members";
import { Card } from "@nextui-org/react";
import { PropsWithChildren } from "react";

const layout = async ({
  children,
  params,
}: PropsWithChildren<{
  params: { id: string };
}>) => {
  const member = await getMember(params.id);
  const basePath = `/members/${params.id}`;
  const navLinks = [
    { name: "Profile", href: `${basePath}` },
    {
      name: "Photos",
      href: `${basePath}/photos`,
    },
    {
      name: "Chat",
      href: `${basePath}/chat`,
    },
  ];
  return (
    <div className="grid grid-cols-12 sm:gap-5 h-[100vh] container mx-auto gap-1">
      <div className="sm:col-span-3 col-span-12">
        <Sidebar member={member} navLinks={navLinks} />
      </div>
      <div className="sm:col-span-9 col-span-12">
        <Card className="w-full mt-10 h-[80vh]">{children}</Card>
      </div>
    </div>
  );
};

export default layout;
