import Nav from "@/components/Nav";

export default function Question() {

    return (
      <>
        <Nav />

        <div className="bg-zinc-800 w-full h-screen flex justify-center">
            <div className="w-[1024px] flex flex-wrap justify-between">
                <div className="w-[400px]">1</div>
                <div className="w-[400px]">2</div>
            </div>
        </div>
      </>
    )
  }