import { getServiceStatus } from "@/lib/actions/scraper.actions";
import { FaHeart } from "react-icons/fa";

export default async function Page() {
  const { isServerOnline, onlineCount } = await getServiceStatus();

  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col items-center gap-4 w-full">
        <div className="flex items-center justify-center py-16 w-full border-b border-[--border-1] bg-[--background-0]">
          <div className="flex justify-between w-full max-w-screen-lg">
            <div className="flex flex-col gap-8">
              <div className="flex gap-8">
                <div className="flex items-center justify-center size-20 text-[--foreground-2] group-hover/submenu:text-[--foreground-1] rounded-xl bg-[--background-3]">
                  <FaHeart size={48} />
                </div>
                <div className="flex flex-col gap-3">
                  <h1 className="text-3xl">Estado del servicio</h1>
                  <p className="text-[--foreground-2]">
                    Actividad y población del servidor
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className={`flex items-center justify-between px-5 py-3 w-full max-w-screen-lg font-medium rounded ${
            isServerOnline ? "bg-[--success]" : "bg-[--warning]"
          }`}
        >
          <span>{isServerOnline ? "Online" : "Offline"}</span>
          <span>{isServerOnline ? onlineCount : ""}</span>
        </div>
      </div>
    </div>
  );
}
