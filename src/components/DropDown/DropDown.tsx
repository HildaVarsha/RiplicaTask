import { Menu } from "@headlessui/react";

import { BsFillTrash3Fill } from "react-icons/bs";
import { GrEdit } from "react-icons/gr";
import { HiOutlineDotsVertical } from "react-icons/hi";
import Parent from "../Parent/Parent";
export default function MyDropdown() {
  return (
    <Parent className="card">
      <Menu>
        <Menu.Button>
          {" "}
          <HiOutlineDotsVertical />
        </Menu.Button>
        <Menu.Items className="card">
          <Menu.Item>
            {({ active }) => (
              <div className="flex items-center hover:p-2 rounded-sm hover:bg-yellow-500  gap-2">
                <a
                  // className={`${active && "bg-yellow-500"}`}
                  href="/account-settings"
                >
                  <BsFillTrash3Fill className="h-3 w-3 text-red-500" />
                </a>
                <p>Delete</p>
              </div>
            )}
          </Menu.Item>
          <Menu.Item>
            {({ active }) => (
              <div className="flex items-center pt-2 hover:p-2 rounded-sm  hover:bg-yellow-500 gap-2">
                <a href="/">
                  <GrEdit className="h-3 w-3 text-red-500" />
                </a>
                <p>Edit</p>
              </div>
            )}
          </Menu.Item>
        </Menu.Items>
      </Menu>
    </Parent>
  );
}
