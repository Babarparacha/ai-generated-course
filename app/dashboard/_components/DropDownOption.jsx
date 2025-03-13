import React, { useState } from 'react'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
  import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
  } from "@/components/ui/alert-dialog"
  
  import {HiOutlineTrash} from 'react-icons/hi2'
  
const DropDownOption = ({children,handleDelete}) => {
    const  [openAlert, setopenAlert] = useState(false)
    const onDeleteClick=()=>{

}  
return (
    <div>
      <DropdownMenu>
  <DropdownMenuTrigger>{children}</DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuItem onClick={()=>setopenAlert(true)}>
        <div className="flex item-center gap-2 cursor-pointer">
        <HiOutlineTrash/>Delete
        </div>
        </DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>
 {/* dialog box  */}
 <AlertDialog open={openAlert}>
  <AlertDialogContent>
    <AlertDialogHeader>
      <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
      <AlertDialogDescription>
        Are you Sure You want to delete the course
      </AlertDialogDescription>
    </AlertDialogHeader>
    <AlertDialogFooter>
    <div onClick={() => setopenAlert(false)}>
  <AlertDialogCancel>Cancel</AlertDialogCancel>
</div>
<AlertDialogAction onClick={() => { handleDelete(); setopenAlert(false); }}>
  Delete
</AlertDialogAction>

    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>

    </div>
  )
}

export default DropDownOption