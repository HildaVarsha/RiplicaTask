import React, { Fragment, useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import Parent from "../components/Parent/Parent";
import { HiOutlineDotsVertical } from "react-icons/hi";

import { TABLE_CUSTOM_STYLING } from "../components/Tablestyle/TableStyle";
import { itemone } from "../Constants/Helpers";
import product from "../assets/images/bg-duck.jpg";
import DropDown from "../components/DropDown/DropDown";
import Header from "../layouts/Header";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import MyDropdown from "../components/DropDown/DropDown";

interface MessageProps {}
const Message: React.FC<MessageProps> = () => {
  const [filterList, setFilterList] = useState([
    {
      id: 1,
      name: "Messages for you",
      Message:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut, assumenda?",
    },
    {
      id: 2,
      name: "Messages for you",
      Message:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut, assumenda?",
    },
    {
      id: 3,
      name: "Messages for you",
      Message:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut, assumenda?",
    },
    {
      id: 4,
      name: "Messages for you",
      Message:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut, assumenda?",
    },
  ]);

  const columns: any = [
    {
      name: "S.No",
      selector: (row: any) => {
        return (
          <Parent className="flex items-center gap-3">
            <input type="checkbox" className="w-3 h-3 rounded-sm" />
            <p>{row.id}</p>
          </Parent>
        );
      },
      sortable: true,
    },
    {
      name: "Template Name ",
      selector: (row: any) => row.name,
    },
    {
      name: "Message",
      selector: (row: any) => row.Message,
    },

    {
      name: "Action",
      center: true,
      selector: (row: any) => {
        return (
          <Parent className="card">
            <MyDropdown />
          </Parent>
        );
      },
    },
  ];

  const filteredItemsFunction = (e: any) => {
    const filterText = e.target.value;
    const filterListData: any = itemone?.filter((item: any) => {
      return (
        (item.name &&
          item.name.toLowerCase().includes(filterText.toLowerCase())) ||
        (item.mobile &&
          item.mobile.toLowerCase().includes(filterText.toLowerCase()))
      );
    });
    setFilterList(filterListData);
  };

  return (
    <Header>
      <div className="h-screen w-screen ">
        {/* <Sidebar /> */}

        <Parent className=" sticky top-0 "></Parent>
        <Parent className=" px-5 my-5 overflow-auto z-10 ">
          <h6 className="font-bold pl-5 text-lg">Messages</h6>
          <Parent className="p-5 ">
            <Parent className="card p-3 mt-5">
              <Parent className="flex  justify-start flex-col ">
                <input
                  type="text"
                  placeholder="search"
                  className="w-64 border-1 border-gray-400 p-3 bg-gray-200 rounded-md"
                  onChange={(e) => filteredItemsFunction(e)}
                />
                <Parent className="w-full h-full ">
                  <DataTable
                    noHeader={true}
                    columns={columns}
                    data={filterList}
                    customStyles={TABLE_CUSTOM_STYLING}
                    // paginationComponent={CustomMaterialPagination}
                    pagination
                    //   subHeaderComponent={subHeaderComponentMemo}
                    noDataComponent={
                      <>
                        <h6 className="text-xl font-semibold text-gray-700">
                          Messages Not Avaliable
                        </h6>
                      </>
                    }
                  />
                </Parent>
              </Parent>
            </Parent>
          </Parent>
        </Parent>
      </div>
    </Header>
  );
};

export default Message;
