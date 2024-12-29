import { Button } from "./ui/button/Button";
import { Web3Input } from "./ui/input";

export function SendSol() {
  return (
    <>
      <div className="mx-auto px-4 py-8 flex flex-col items-center space-y-6">
        <p className="text-center ">
          Note:{" "}
          <span className="text-red-500">
            {" "}
            This is only Ui, It is not working
          </span>
        </p>
        <div className="text-center">
          <h1 className="font-bold text-xl">Send</h1>
        </div>
        <div className="w-[500px]">
          <div className="w-full flex flex-col items-center space-y-6">
            <div className="w-full space-y-4">
              <Web3Input
                type="text"
                placeholder="Enter address"
                className="bg-[#202127] border-[#202127]"
              />
              <Web3Input
                type="number"
                placeholder="Enter amount"
                className="bg-[#202127] border-[#202127]"
              />
            </div>
            <div className="w-full mt-10">
              <Button className="w-full h-10 dark" variant={"default"}>
                Send
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
