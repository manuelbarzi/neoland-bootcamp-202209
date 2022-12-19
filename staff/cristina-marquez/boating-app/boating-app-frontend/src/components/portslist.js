import { useEffect, useState } from "react";
import getPorts from "../logic/portsList";
import Port from "./port";

function PortsList() {
  const [ports, setPorts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchPorts = async () => {
      const fetchedPorts = await getPorts(true);
      setPorts(fetchedPorts);
      setIsLoading(false);
    };
    fetchPorts();
  }, []);

  return (
    <div className="w-full">
      <div className="grid gap-10 grid-cols-3 p-8">
        {isLoading && <>Show loading spinner</>}
        {ports &&
          ports.map((port) => <Port key={port._id} portInfo={port}></Port>)}
      </div>
    </div>
  );
}

export default PortsList;
