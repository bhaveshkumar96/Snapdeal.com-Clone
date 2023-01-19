import { Card, Box, Typography, Button, styled } from '@mui/material';


import QuantityButton from './QuantityButton';

const Component = styled(Card)`
    border-top: 1px solid #f0f0f0;
    border-radius: 0px;
    display: flex;
`;

const LeftComponent = styled(Box)`
    margin: 20px; 
    display: flex;
    flex-direction: column;
`;

const SmallText = styled(Typography)`
    color: #878787;
    font-size: 14px;
    margin-top: 10px;
`;

const Cost = styled(Typography)`
    font-size: 18px;
    font-weight: 600;
`;

const MRP = styled(Typography)`
    color: #878787;
`;



const Remove = styled(Button)`
    margin-top: 20px;
    font-size: 16px;
`;

const CartItem = ({ item, removeItemFromCart }) => {
    

    return (
        <Component>
            <LeftComponent>
                <img src={item.image} style={{ height: 110, width: 110 }} />
                <QuantityButton />
            </LeftComponent>
            <Box style={{ margin: 20 }}>
                <Typography>{item.title}</Typography>
                <SmallText>Seller:RetailNet
                    
                </SmallText>
                <Typography style={{margin: '20px 0'}}>
                    <Cost component="span">₹{item.price.cost}</Cost>&nbsp;&nbsp;&nbsp;
                    <MRP component="span"><strike>₹{item.price.mrp}</strike></MRP>&nbsp;&nbsp;&nbsp;
                   
                </Typography>
                <Remove onClick={() => removeItemFromCart(item.id)}>Remove</Remove>
            </Box>
        </Component>
    )
}

export default CartItem;