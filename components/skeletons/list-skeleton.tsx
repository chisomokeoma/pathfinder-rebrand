"use client"

import { useState } from "react";
import { Skeleton, Button } from "@mantine/core";

export function ListSkeleton() {
  return (
    <div className=" grid gap-7 grid-cols-3">
      <Skeleton height={200} width={350} radius="sm" />
      <Skeleton height={200} width={350} radius="sm" />
      <Skeleton height={200} width={350} radius="sm" />
      <Skeleton height={200} width={350} radius="sm" />
      <Skeleton height={200} width={350} radius="sm" />
      <Skeleton height={200} width={350} radius="sm" />
      <Skeleton height={200} width={350} radius="sm" />
    </div>
  );
}
