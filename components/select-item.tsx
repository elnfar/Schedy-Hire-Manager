import * as React from "react"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

type ItemValues = {
    value:string,
    name:string
}
type DropDownProps = {
    items:ItemValues[],
    mainName:string,
    name:string
}


export function DropDown({items,name,mainName}:DropDownProps) {
    console.log();
    

    
  return (
    <Select name={name}>
      <SelectTrigger  className="w-[180px]">
        <SelectValue 
       placeholder={mainName} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>{mainName}</SelectLabel>

                {items.map((item) => (
                    <SelectItem key={item.name}  value={item.value}>{item.name}</SelectItem>
                ))}

        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
