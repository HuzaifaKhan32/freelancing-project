import Image from 'next/image';

export default function Loading() {
  return (
    <div className="flex justify-center items-center h-screen w-screen bg-background-light">
      <Image src="/brandLogo.png" alt="Loading" className="animate-blink" width={96} height={96} />
    </div>
  );
}