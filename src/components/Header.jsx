import React, { useState } from 'react';
import {
    AppBar,
    Toolbar,
    IconButton,
    Badge,
    Typography,
    Drawer,
    Box,
    List,
    ListItem,
    ListItemAvatar,
    ListItemText,
    Avatar,
    IconButton as MuiIconButton,
    Divider,
} from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import DeleteIcon from '@mui/icons-material/Delete';
import { useCart } from '../contexts/CartContext';
import OrderForm from './OrderForm';
import ThankYouModal from '../components/ThankYouModal';

const Header = () => {
    const { cartItems } = useCart();
    const [isDrawerOpen, setDrawerOpen] = useState(false);
    const [isModalOpen, setModalOpen] = useState(false);
    const [orderDetails, setOrderDetails] = useState(null); // Хранение информации о заказе

    const toggleDrawer = (open) => () => {
        setDrawerOpen(open);
    };

    const handleOrderComplete = (orderData) => {
        setDrawerOpen(false); // Закрываем корзину
        setOrderDetails(orderData); // Сохраняем данные о заказе
        setModalOpen(true); // Открываем модальное окно
    };

    const handleCloseModal = () => {
        setModalOpen(false);
        setOrderDetails(null); // Сбрасываем данные о заказе после закрытия
    };

    return (
        <>
            <AppBar position="sticky" sx={{ background: 'linear-gradient(135deg, #2196f3, #00bcd4)', height: '60px' }}>
                <Toolbar sx={{ justifyContent: 'space-between', alignItems: 'center', padding: '0 1.5rem' }}>
                    <Box sx={{ display: 'flex', flexDirection: 'row-reverse', alignItems: 'center' }}>
                        <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#fff' }}>
                            Гусь-обнимусь
                        </Typography>
                        <Box
                            component="img"
                            src="/images/goosehead.png"
                            alt="Гусь-обнимусь"
                            sx={{
                                width: '100%',
                                maxWidth: '30px',
                                height: 'auto',
                                borderRadius: '16px',
                                boxShadow: '0 8px 30px rgba(0,0,0,0.15)',
                                objectFit: 'cover',
                                margin: '5px',
                            }}
                        />
                    </Box>
                    <IconButton color="inherit" onClick={toggleDrawer(true)}>
                        <Badge
                            badgeContent={cartItems.reduce((total, item) => total + item.quantity, 0)}
                            color="error"
                            sx={{
                                '& .MuiBadge-badge': {
                                    fontSize: '0.8rem',
                                    height: '20px',
                                    minWidth: '20px',
                                },
                            }}
                        >
                            <ShoppingCartIcon fontSize="large" />
                        </Badge>
                    </IconButton>
                </Toolbar>
            </AppBar>

            <Drawer anchor="right" open={isDrawerOpen} onClose={toggleDrawer(false)}>
                <Box
                    sx={{
                        width: { xs: 280, sm: 320 },
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 2,
                        padding: '1rem',
                        height: '100%',
                        backgroundColor: '#f9f9f9',
                    }}
                >
                    <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#333' }}>
                        Корзина
                    </Typography>
                    <Divider />
                    <CartList />
                    <Divider />
                    {cartItems.length > 0 ? (
                        <Box sx={{ mt: 'auto', pt: 2 }}>
                            <OrderForm onOrderComplete={handleOrderComplete} />
                        </Box>
                    ) : (
                        <Typography variant="body2" sx={{ color: '#666', textAlign: 'center', marginTop: 'auto' }}>
                            Корзина пуста
                        </Typography>
                    )}
                </Box>
            </Drawer>

            {/* Модальное окно благодарности */}
            <ThankYouModal
                open={isModalOpen}
                onClose={handleCloseModal}
                orderDetails={orderDetails}
            />
        </>
    );
};

const CartList = () => {
    const { cartItems, removeFromCart } = useCart();

    return (
        <List sx={{ flexGrow: 1, overflowY: 'auto' }}>
            {cartItems.map((item) => (
                <ListItem
                    key={item.id}
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        gap: 2,
                        borderBottom: '1px solid #ddd',
                        padding: '0.5rem 0',
                    }}
                >
                    <ListItemAvatar>
                        <Avatar
                            src={item.image}
                            alt={item.name}
                            variant="square"
                            sx={{
                                width: 56,
                                height: 56,
                                borderRadius: '8px',
                                objectFit: 'contain',
                            }}
                        />
                    </ListItemAvatar>
                    <ListItemText
                        primary={item.name}
                        secondary={`${item.quantity} x ${item.price} грн`}
                        sx={{
                            '.MuiListItemText-primary': { fontSize: '0.95rem', fontWeight: 'bold', color: '#333' },
                            '.MuiListItemText-secondary': { fontSize: '0.85rem', color: '#666' },
                        }}
                    />
                    <MuiIconButton color="error" onClick={() => removeFromCart(item.id)}>
                        <DeleteIcon />
                    </MuiIconButton>
                </ListItem>
            ))}
        </List>
    );
};

export default Header;
