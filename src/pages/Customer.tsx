import React, { useState } from "react";
import DataTable from "react-data-table-component";
import Parent from "../components/Parent/Parent";

import { TABLE_CUSTOM_STYLING } from "../components/Tablestyle/TableStyle";
import { itemTwo } from "../Constants/Helpers";
import Header from "../layouts/Header";
import MyDropdown from "../components/DropDown/DropDown";

interface CustomerProps {}
const Customer: React.FC<CustomerProps> = () => {
  const [filterList, setFilterList] = useState([
    {
      id: 1,
      name: "Anitha",
      mobile: "98978768758",
      category: "Clothes",
      price: "900",
      Finanace: "HDFC",
      Vehicle: "x01756f",
    },
    {
      id: 2,
      name: "akash",
      mobile: "98978768758",

      category: "Clothes6",
      price: "100",
      Finanace: "HDFC",
      Vehicle: "x01756f",
    },
    {
      id: 3,
      name: "stephen",
      mobile: "98978768758",
      category: "Clothes11",
      price: "1900",
      Finanace: "HDFC",
      Vehicle: "x01756f",
    },
    {
      id: 4,
      name: "Jeni",
      mobile: "98978768758",
      category: "Mobile",
      price: "9700",
      Finanace: "HDFC",
      Vehicle: "x01756f",
    },
    {
      id: 5,
      name: "Samsung",
      mobile: "98978768758",
      category: "laptop",
      price: "9300",
      Finanace: "HDFC",
      Vehicle: "x01756f",
    },
    {
      id: 6,
      name: "Fruits",
      mobile: "98978768758",
      category: "Restaurant",
      price: "9500",
      Finanace: "HDFC",
      Vehicle: "x01756f",
    },
    {
      id: 7,
      name: "Lap",
      mobile: "98978768758",
      Vehicle: "x01756f",
      category: "Electron",
      price: "90430",
      Finanace: "HDFC",
    },
  ]);
  const userNavigation = [
    { name: "Your profile", href: "#" },
    { name: "Sign out", href: "#" },
  ];

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
      name: "Customers",
      selector: (row: any) => row.name,
    },
    {
      name: "Vehicle",
      selector: (row: any) => row.Vehicle,
    },
    {
      name: "Phone",
      selector: (row: any) => row.mobile,
    },
    {
      name: "Finance",
      center: true,

      selector: (row: any) => row.Finanace,
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
    const filterListData: any = itemTwo?.filter((item: any) => {
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
          <h6 className="font-bold pl-5 text-lg">Customers</h6>
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
                          customers Not Avaliable
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

export default Customer;
