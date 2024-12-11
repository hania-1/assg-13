import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="flex items-center justify-center flex-col gap-10">
      <h1 className="text-3xl font-serif py-1">This is the SIGN UP page</h1>
      <SignUp />
    </div>
  );
}
