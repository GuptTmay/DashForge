"use client"

import * as React from "react"

import { Calendar } from "@/components/ui/calendar"
import { Card, CardDescription, CardHeader } from "./ui/card"

export function MyCalendar() {
  
  const [date, setDate] = React.useState<Date | undefined>(
    new Date(2025, 5, 12)
  )

  return (
    <Card className="flex flex-1 pb-0 gap-0 flex-col items-center w-full">
      <CardHeader className="text-center flex items-center justify-between font-bold w-full">
        <h2>Calendar</h2>
        <CardDescription>June 2025</CardDescription>
      </CardHeader>
      <Calendar
        mode="single"
        defaultMonth={date}
        selected={date}
        onSelect={setDate}
        className="rounded-lg shadow-sm w-full"
      />
    </Card>
  )
}
