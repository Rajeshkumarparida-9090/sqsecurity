import { Dialog, DialogContent, DialogTitle } from "@mui/material";
import React from "react";
import CloseIcon from '@mui/icons-material/Close';

const Modal = ({
    open,
    onClose,
    handleReadMore,
    description,
    children,
    title,
    readMore
})=>{
    return(
        <>
            <Dialog
            open={open}
          onClose={onClose}
          aria-labelledby="form-dialog-title"
          scroll="body"
          className='relative'
          sx={{
                  '& .MuiDialog-container': {
                    '& .MuiPaper-root': {
                      width: '100%',
                    },
                  },}
          }
        >
          <DialogTitle className='!mx-6'>
               <div style={{display:"flex", justifyContent:"space-between",alignItems:"center"}}>
                   <div className='text-[#353349]' style={{
                    fontFamily: 'Rubik',
                    fontSize: '30px',
                    fontWeight: 500,
                    lineHeight: '37.92px',
                   }}>
                      {title}
                   </div>
                   <div className='' onClick={onClose}>
                        <CloseIcon className='!fill-[#000000] cursor-pointer' />
                    </div>
               </div>
          </DialogTitle>
          <div className="mx-12">
              {description?.length > 100 ? 
                 <>
                   {readMore === false ? 
                   <div style={{
                    fontFamily: 'Rubik',
                    fontSize: '16px',
                    fontWeight: 400,
                    lineHeight: '18.96px',
                  }}>
                    {description?.substring(0, 99) }
                    <span className='cursor-pointer ml-2' style={{
                      color: '#004FE8'
                    }} onClick={handleReadMore}>Read More</span>
                  </div>
                  :
                  <div style={{
                    fontFamily: 'Rubik',
                    fontSize: '16px',
                    fontWeight: 400,
                    lineHeight: '18.96px',
                  }}>
                    {description }
                    <span className='cursor-pointer ml-2' style={{
                      color: '#004FE8'
                    }} onClick={handleReadMore}>Read Less</span>
                  </div>}
                 </>
               : <>
                <div style={{
                    fontFamily: 'Rubik',
                    fontSize: '16px',
                    fontWeight: 400,
                    lineHeight: '18.96px',
                  }}>
                    {description}
                  </div>
               </>}
          </div>
          <DialogContent>
          {children}
          </DialogContent>
        </Dialog>
        </>
    )
}
export default Modal;