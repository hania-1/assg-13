import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="flex items-center justify-center flex-col gap-10">
      <h1 className="text-3xl font-serif">This is the SIGN In page</h1>
      <SignIn />
    </div>
  );
}
