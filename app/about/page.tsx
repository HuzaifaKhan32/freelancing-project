import Image from 'next/image';

export default function AboutPage() {
  return (
    <div className="relative flex min-h-screen w-full flex-col">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4">
            <div
              className="relative flex min-h-[480px] w-full flex-col items-center justify-center gap-6 rounded-xl bg-cover bg-center p-4 text-center"
              data-alt="Model wearing a minimalist t-shirt against a clean urban backdrop."
              style={{
                backgroundImage:
                  'linear-gradient(rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.5) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuBW3PmSVUeHe8AC6QRfrmS74wQjSjn1iLuwTlp04lrDG1sB4k-_xZqe9MAqREb5vaSgNmoy9KSM-3X9Vj3e7htBcbTgCXVYJyUPZNOVuHYJyUPZNOVuHYHomuxOt6gcQfSn1-gVe1LNpRlAG0nQbouj8E7Ug8ikmYZ9yqSCbxod5v8T1mq3slsXTek1AWqD4xmygaib-5fWoiZ3j1fUzqhc1jgUyi4ecCLMC3588v2CxAc3pTLb8fImo7YPzr5AiePmbSJqgjaEFc2JXzCz3dNu9iU")',
              }}
            >
              <div className="flex flex-col gap-2">
                <h1 className="text-white text-4xl font-black leading-tight tracking-tighter md:text-6xl">
                  More Than a T-Shirt.
                </h1>
                <h2 className="text-white/90 text-base font-normal leading-normal md:text-lg">
                  We create high-quality, ethically-made essentials that inspire
                  self-expression.
                </h2>
              </div>
              <button className="flex h-12 min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg bg-primary px-5 text-white text-base font-bold leading-normal tracking-wide hover:bg-primary/90 transition-colors">
                <span>Shop Our Collection</span>
              </button>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24">
          <div className="container mx-auto px-4">
            <div className="flex flex-col items-center gap-4 text-center">
              <h2 className="text-text-light text-3xl font-bold tracking-tight">
                Our Story
              </h2>
              <p className="max-w-3xl text-text-secondary-light text-base md:text-lg leading-relaxed">
                It all started with a simple idea: the search for the perfect-fit
                tee. We wanted to create not just another piece of clothing, but
                a canvas for self-expression, made sustainably and built to last.
                This is our journey from a simple concept to the reality of your
                favorite t-shirt.
              </p>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 bg-content-light">
          <div className="container mx-auto px-4">
            <div className="flex flex-col items-center gap-4 text-center">
              <h2 className="text-text-light text-3xl font-bold tracking-tight">
                Our Lookbook
              </h2>
              <p className="max-w-2xl text-text-secondary-light text-base md:text-lg">
                See our t-shirts in the wild. Real people, real style.
              </p>
            </div>
            <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4">
              <Image
                className="rounded-lg object-cover aspect-[3/4]"
                alt="A woman wearing a white graphic tee posing against a colorful wall."
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDcVUbwKI8y3HSCqSDnUazseGbKprY_ygwpA_M5DJv552idTXccW44B4gHQmJa8dIQ8xeUAuZQwiAOd3NngVQ2cNU8Vbp1qKoDhCV1GWHsu1zSdxuFzydU0dmVJdw9yHr4igM__eXLHpfERu-A8Mu-werU5ONkHQbuktZbquk-Ne1o3mDeA_jyXY4qO9f6A5nh4d2eI52Gz2K_h0LE54Dl1PtRrDTCKQTJwXZPmKr9yZrmqluv8ZPVaFwisiMyR7ORxEDRx2"
                width={300}
                height={400}
              />
              <Image
                className="rounded-lg object-cover aspect-[3/4]"
                alt="A man in a black t-shirt laughing with friends outdoors."
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBIfQRc6-087Og35_dldDAsbfydV20uU-z4pIPGvpHlUHeOOVNXlEUXBXGP5ZAoZcOoF6hzO8y70v9IOtqmrKS7az_qmYAo_RJ1Q0B_DM8WrefIIDxe359kUzgQfZxVvbhFy1oCLgFBXsQ40ZfQgzXaQ6QftuUjbS5leH-OZTVN5QoayPFCERqAV_Z55uG6urIavsfcSOyG86MgZUTQxxzdv0t1sxmDx3h_qX0Y_VuGGqmdx3hNygb6A8yGoAx7DKYoXFklEh5dbkyk"
                width={300}
                height={400}
              />
              <Image
                className="rounded-lg object-cover aspect-[3/4]"
                alt="Close-up on the fabric and print of a custom designed t-shirt."
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDhw1tq8lN7hFb9PQbwNzcr0YU3aqHmAybekmtWB2ziTiVWR2Tav01B3B4D3LSZE7Qp1zHnNUMpU3kixGp39--I4BMp8HdnfMpM3VxnX_sRqbzDUMohaQXkPFyRYCPGXhGo9OqSUea6JbGT3a_keVVaFKyBjiNGEN6cYmJrLHlbaTiBJwZz-z17xWxx5tqRd71pg0-3jiksOAGnuBLLeyNLgWgOM2yRPR9eVxNhUWe3QONSatEsCGEIUR1lkAgveUPgIWbBBnoSpEhl"
                width={300}
                height={400}
              />
              <Image
                className="rounded-lg object-cover aspect-[3/4]"
                alt="A group of people wearing matching brand t-shirts at an event."
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDiWJsP1tUmfILx7jwV_LfmTDBfDvnI7maMz61XrPmhJDgXjP-grn13Wxf5Hqw8Y76h8QWbOLvX43p_LC3nmUEqyRD__WoJHMfqTYBgytW-qOqkww5Rep8qrlEnr_58ACrdH7dMw78wjFv_pHngBA39PSrBVySpQxhp8zPhR5lEKtWL6Hjlhi6sXr7j3v5W3bPgZfv6uwR-Qc9esf7my4o9Plp6n4LuDCJB8D3QRvh-OhW1bVQYEVGLCrHiyVGgTVSG-RwUHAjBytIS"
                width={300}
                height={400}
              />
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24">
          <div className="container mx-auto px-4">
            <div className="flex flex-col items-center gap-4 rounded-xl bg-background-light p-8 md:p-12 text-center">
              <h2 className="text-text-light text-3xl font-bold tracking-tight">
                Ready to Find Your New Favorite Tee?
              </h2>
              <p className="max-w-xl text-text-secondary-light">
                Explore our latest collection and join a community that values
                quality, sustainability, and self-expression.
              </p>
              <button className="mt-4 flex h-12 min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg bg-primary px-5 text-white text-base font-bold leading-normal tracking-wide hover:bg-primary/90 transition-colors">
                <span>Shop The Collection</span>
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

