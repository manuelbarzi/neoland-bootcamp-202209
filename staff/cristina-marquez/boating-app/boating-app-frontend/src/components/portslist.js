import { useEffect, useState } from "react";
import getPorts from "../logic/portsList";
import Port from "./port";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDharmachakra } from "@fortawesome/free-solid-svg-icons";

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
      {isLoading && (
        <div class="flex justify-center items-center">
          <div
            className="mt-16"
            style={{ animation: "spin 4s linear infinite" }}
            role="status"
          >
            <FontAwesomeIcon
              icon={faDharmachakra}
              className="text-6xl text-darkblue"
            />
            <span class="visually-hidden">Loading...</span>
          </div>
        </div>
      )}
      <div className="grid gap-10 grid-cols-3 p-8">
        {ports &&
          ports.map((port) => <Port key={port._id} portInfo={port}></Port>)}
      </div>
    </div>
  );
}

export default PortsList;
