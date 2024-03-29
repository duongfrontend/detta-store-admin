"use client";

import { ColumnDef } from "@tanstack/react-table";

export const columns: ColumnDef<CustomerType>[] = [
  {
    accessorKey: "clerkId",
    header: "ID khách hàng",
  },
  {
    accessorKey: "name",
    header: "Họ và tên",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
];
