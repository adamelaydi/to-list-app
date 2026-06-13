export default function MySnackBar({open}){
    let display;
    if(open.open){
        display="flex";
    }else{
        display="none";
    }
    
    return(
        <div style={{
            height:"40px",
            border:"none",
            backgroundColor:"#11b4ddea",
            position:"absolute",
            bottom:"20px",
            left:"20px",
            padding:"5px",
            display:display,
            justifyContent:"space-between",
            borderRadius:"7px",
            color:"white"
        }}>
            <p style={{
                textTransform:"capitalize",
            }}>{open.message}</p>
            
        </div>
    )
}