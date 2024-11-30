import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import CardList from "./components/CardList";

export default function Home() {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <div className="w-64 p-4 bg-white border-r">
        <Sidebar />
      </div>

      <div className="flex flex-col flex-1">
        <Header />
        <div className="p-6">
          <CardList />
        </div>
      </div>
    </div>
  );
}
