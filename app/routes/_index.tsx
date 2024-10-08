import { Timer } from "~/components/Timer";
export default function Index() {
  return (
    <div className="flex items-center justify-center h-screen relative">
      <div className="pointer-events-none">
        <Timer />
      </div>
      <div data-tauri-drag-region className="absolute bg-transparent inset-0 w-full"></div>
    </div>
  );
}

