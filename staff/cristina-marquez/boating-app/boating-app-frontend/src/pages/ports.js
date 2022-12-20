import PortsList from "../components/portslist";

function PortsPage() {
  return (
    <main className="w-screen min-h-screen bg-bone flex justify-center pt-10 ">
      <div className="w-11/12">
        <PortsList></PortsList>
      </div>
    </main>
  );
}

export default PortsPage;
