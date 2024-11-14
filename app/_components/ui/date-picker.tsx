"use client"

import * as React from "react"
import { ptBR } from "date-fns/locale"
import { format, startOfYear } from "date-fns"
import { CalendarIcon } from "lucide-react"

import { cn } from "@/app/_lib/utils"
import { Button } from "./button"
import { Calendar } from "./calendar"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "./popover"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "./select"
import { SelectSingleEventHandler } from "react-day-picker"

interface DatePickerProps {
    value?: Date;
    onChange?: SelectSingleEventHandler;
}

export const DatePicker = ({ value, onChange }: DatePickerProps) => {
    const [calendarDate, setCalendarDate] = React.useState<Date>(new Date())

    const currentYear = new Date().getFullYear()
    const years = Array.from({ length: currentYear - 1899 }, (_, i) => currentYear - i)
    const months = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ]

    const handleYearChange = (year: string) => {
        setCalendarDate(prevDate => {
            const newDate = new Date(prevDate)
            newDate.setFullYear(parseInt(year))
            return newDate
        })
    }

    const handleMonthChange = (month: string) => {
        setCalendarDate(prevDate => {
            const newDate = new Date(prevDate)
            newDate.setMonth(months.indexOf(month))
            return newDate
        })
    }
    return (
        <Popover>
            <PopoverTrigger asChild>
                <Button
                    variant={"outline"}
                    className={cn(
                        "w-full justify-start text-left font-normal",
                        !value && "text-muted-foreground"
                    )}
                >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {value ? new Date(value).toLocaleDateString('pt-BR', {
                        day: '2-digit',
                        month: 'short',
                        year: 'numeric',
                    }) : <span>Selecione uma data...</span>}
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
                <div className="flex items-center justify-between p-2">
                    <Select onValueChange={handleMonthChange} value={format(calendarDate, "MMMM")}>
                        <SelectTrigger className="w-[120px]">
                            <SelectValue placeholder="Month" />
                        </SelectTrigger>
                        <SelectContent>
                            {months.map((month) => (
                                <SelectItem key={month} value={month}>
                                    {month}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                    <Select onValueChange={handleYearChange} value={calendarDate.getFullYear().toString()}>
                        <SelectTrigger className="w-[100px]">
                            <SelectValue placeholder="Year" />
                        </SelectTrigger>
                        <SelectContent>
                            {years.map((year) => (
                                <SelectItem key={year} value={year.toString()}>
                                    {year}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>
                <Calendar
                    mode="single"
                    selected={value}
                    onSelect={onChange}
                    month={calendarDate}
                    onMonthChange={setCalendarDate}
                    initialFocus
                    fromDate={startOfYear(new Date(1900, 0, 1))}
                    locale={ptBR}
                    toDate={new Date()}
                />
            </PopoverContent>
        </Popover>
    )
}
