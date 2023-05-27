import React from "react";
import Parent from "../components/Parent/Parent";
import { AiFillSetting, AiOutlineUsergroupDelete } from "react-icons/ai";
import { FiSmartphone } from "react-icons/fi";
import Header from "../layouts/Header";
const Home = () => {
  return (
    <Header>
      <Parent>
        <Parent className=" m-4 ">
          <Parent className="grid grid-cols-12 gap-5 ">
            <Parent className="card bg-white p-4 rounded-md  h-30 col-span-4 flex justify-center gap-2">
              <Parent>
                <FiSmartphone className="h-4 w-4 mt-1" />
              </Parent>
              <Parent>
                <h2 className="text-base font-bold">Scheduled Message</h2>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum,
                optio.
              </Parent>
            </Parent>
            <Parent className="card bg-white p-4 rounded-md  h-30 col-span-4 flex justify-center gap-2">
              <Parent>
                <AiOutlineUsergroupDelete className="h-4 w-4 mt-1" />
              </Parent>
              <Parent>
                <h2 className="text-base font-bold">Customers</h2>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Similique, distinctio?
              </Parent>
            </Parent>
            <Parent className="card bg-white p-4 rounded-md  h-30 col-span-4 flex justify-center gap-2">
              <Parent>
                <FiSmartphone className="h-4 w-4 mt-1" />
              </Parent>
              <Parent>
                <h2 className="text-base font-bold"> Message Template</h2>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Provident, at?
              </Parent>
            </Parent>
            <Parent className="card bg-white p-4  rounded-md  h-30 col-span-4 flex justify-center gap-2">
              <Parent>
                <AiFillSetting className="h-4 w-4 mt-1" />
              </Parent>
              <Parent>
                <h2 className="text-base font-bold">Global Settings</h2>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero,
                recusandae.
              </Parent>
            </Parent>
          </Parent>
        </Parent>
      </Parent>
    </Header>
  );
};

export default Home;
