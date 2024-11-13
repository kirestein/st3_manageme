"use client";

import { Button } from "@/app/_components/ui/button";
import { employeeData } from "@prisma/client";
import { ColumnDef } from "@tanstack/react-table";
import { EditIcon, TrashIcon } from "lucide-react";

export const employeeColumns: ColumnDef<employeeData, string>[] = [
  {
    accessorKey: "employeePhoto",
    header: "Photo",
  },
  {
    accessorKey: "fullName",
    header: "Name",
  },
  {
    accessorKey: "age",
    header: "Age",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "mobile",
    header: "Phone",
  },
  {
    accessorKey: "actions",
    header: "",
    cell: () => {
      return (
        <div className="space-x-1">
          <Button variant='ghost'>
            <EditIcon size='icon' className="text-muted-foreground" />
          </Button>
          <Button variant='ghost'>
            <TrashIcon size='icon' className="text-muted-foreground" />
          </Button>
        </div>
      )
    }
  },
];
