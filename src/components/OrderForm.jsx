import React, { useState } from 'react';
import { TextField, Button, Box, FormHelperText } from '@mui/material';
import { useCart } from '../contexts/CartContext';

const OrderForm = ({ onOrderComplete }) => {
    const { cartItems, clearCart } = useCart();
    const [name, setName] = useState('');
    const [comment, setComment] = useState('');
    const [phone, setPhone] = useState('');
    const [phoneError, setPhoneError] = useState('');
    console.log('comment?', comment)



    const TELEGRAM_TOKEN = process.env.REACT_APP_TELEGRAM_TOKEN;
    const CHAT_ID = process.env.REACT_APP_CHAT_ID;
    
  


    const sendToTelegram = async (orderData) => {

        console.log('TELEGRAM_TOKEN:', process.env.REACT_APP_TELEGRAM_TOKEN);
        console.log('CHAT_ID:', process.env.REACT_APP_CHAT_ID);

        
        const message = `
Новый заказ:
        
Клиент: ${orderData.customer.name}
Телефон: ${orderData.customer.phone}
Сумма заказа: ${orderData.total} грн
Комментарий: ${orderData.customer.comment}

Товары:
${orderData.items.map(item => `${item.name} ${item.size ? item.size : ''} (${item.quantity}) - ${item.price * item.quantity} грн`).join('\n')}
`;
console.log('Отправляем в телегу:', message)
        try {
            const response = await fetch(`https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    chat_id: CHAT_ID,
                    text: message,
                }),
            });

            if (response.ok) {
                console.log("Message sent to Telegram!");
            } else {
                console.error("Failed to send message", await response.text());
            }
        } catch (error) {
            console.error("Error sending message to Telegram:", error);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Валидация номера телефона (только 10 цифр, без пробелов и символов)
        const phoneRegex = /^\d{10}$/; // регулярное выражение для проверки 10 цифр
        if (!phoneRegex.test(phone)) {
            setPhoneError('Номер телефона начинается с 0 и содержит 10 цифр');
            return;
        } else {
            setPhoneError(''); // Если номер правильный, сбрасываем ошибку
        }

        // Собираем данные заказа
        const orderData = {
            customer: { name, phone, comment },
            items: cartItems,
            total: cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0), // Общая стоимость
        };

        // Отправка данных в Telegram
        sendToTelegram(orderData);

        // Очистка корзины после оформления
        clearCart();

        // Сообщаем родительскому компоненту об успешном заказе
        onOrderComplete(orderData); // Передаем данные о заказе в родительский компонент
        setName(''); // Сброс формы
        setPhone('');
        setComment('');
    };

    return (
        <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <TextField
                label="Имя"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
            />
            <TextField
                label="Телефон"
                placeholder='0 (**) **-**-***'
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
                error={!!phoneError}  // Устанавливаем ошибку, если она есть
                helperText={phoneError}  // Показываем сообщение об ошибке
            />
            <TextField
                label="Комментарий"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                required
            />
            <Button type="submit" variant="contained" color="primary">
                Оформить заказ
            </Button>
        </Box>
    );
};

export default OrderForm;
