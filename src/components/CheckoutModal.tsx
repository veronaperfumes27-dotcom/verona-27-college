import React, { useState } from 'react';
import {
  X,
  ShieldCheck,
  CheckCircle,
  Truck,
  CreditCard,
  QrCode,
  Banknote,
  Sparkles,
  ArrowRight,
  Gift
} from 'lucide-react';
import { useCart } from '../context/CartContext';

export const CheckoutModal: React.FC = () => {
  const {
    isCheckoutOpen,
    setIsCheckoutOpen,
    cart,
    subtotal,
    isFreeShipping,
    clearCart
  } = useCart();

  const [step, setStep] = useState<'details' | 'payment' | 'confirmation'>('details');

  // Customer state
  const [formData, setFormData] = useState({
    fullName: 'Aditya Sharma',
    email: 'aditya.sharma@example.com',
    phone: '9840123456',
    address: '27 Cathedral Road, Poes Garden',
    apartment: 'Apt 4B, Emerald Court',
    city: 'Chennai',
    state: 'Tamil Nadu',
    pinCode: '600086',
    giftMessage: '',
    shippingOption: 'express'
  });

  const [couponCode, setCouponCode] = useState('');
  const [appliedDiscount, setAppliedDiscount] = useState(0);
  const [couponMessage, setCouponMessage] = useState('');
  const [paymentMethod, setPaymentMethod] = useState<'upi' | 'card' | 'cod'>('upi');
  const [isProcessing, setIsProcessing] = useState(false);
  const [completedOrder, setCompletedOrder] = useState<any>(null);

  if (!isCheckoutOpen) return null;

  const baseShippingCost = isFreeShipping ? 0 : 150;
  const packagingFee = formData.shippingOption === 'gift' ? 199 : 0;
  const shippingTotal = baseShippingCost + packagingFee;
  const finalTotal = Math.max(0, subtotal - appliedDiscount + shippingTotal);

  const handleApplyCoupon = (e: React.FormEvent) => {
    e.preventDefault();
    if (couponCode.trim().toUpperCase() === 'VERONA27SIGNATURE') {
      const discountVal = Math.round(subtotal * 0.1);
      setAppliedDiscount(discountVal);
      setCouponMessage(`Privilege code applied: ₹${discountVal.toLocaleString('en-IN')} off (10%)`);
    } else {
      setCouponMessage('Invalid code. Use VERONA27SIGNATURE');
    }
  };

  const handleDetailsSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep('payment');
  };

  const handlePlaceOrder = () => {
    setIsProcessing(true);
    setTimeout(() => {
      const orderNum = `V27-${Math.floor(100000 + Math.random() * 900000)}`;
      const orderRecord = {
        orderId: orderNum,
        customerName: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        address: `${formData.apartment ? formData.apartment + ', ' : ''}${formData.address}, ${formData.city}, ${formData.state} - ${formData.pinCode}`,
        paymentMethod:
          paymentMethod === 'upi' ? 'UPI (Verified)' : paymentMethod === 'card' ? 'Credit Card' : 'Cash on Delivery (COD)',
        items: [...cart],
        subtotal,
        discount: appliedDiscount,
        shipping: shippingTotal,
        total: finalTotal,
        date: new Date().toLocaleDateString('en-IN', {
          day: 'numeric',
          month: 'long',
          year: 'numeric'
        }),
        estimatedDelivery: '3 Business Days (Express Air)'
      };
      setCompletedOrder(orderRecord);
      setIsProcessing(false);
      setStep('confirmation');
      clearCart();
    }, 1200);
  };

  const handleClose = () => {
    setIsCheckoutOpen(false);
    setStep('details');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      <div
        className="fixed inset-0 bg-black/90 backdrop-blur-md transition-opacity"
        onClick={handleClose}
      />

      <div className="relative w-full max-w-4xl bg-[#101015] border border-[#262633] text-white shadow-2xl z-10 my-auto max-h-[94vh] overflow-y-auto animate-in fade-in duration-300">
        {/* Header */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-[#101015]/95 backdrop-blur-md border-b border-[#21212b]">
          <div className="flex items-center gap-2">
            <span className="font-serif text-xl tracking-[0.15em] font-semibold text-white">
              VÉRONA
            </span>
            <span className="font-serif text-xl text-[#c5a059]">27</span>
            <span className="text-xs text-[#736f66] ml-2 tracking-widest uppercase">
              • Secure Concierge Checkout
            </span>
          </div>

          <button
            onClick={handleClose}
            className="p-1.5 text-[#8e8a81] hover:text-white transition-colors cursor-pointer"
            aria-label="Close checkout"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* STEP 1: Details & Address */}
        {step === 'details' && (
          <div className="p-6 sm:p-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
              {/* Form (7 cols) */}
              <form onSubmit={handleDetailsSubmit} className="lg:col-span-7 space-y-6">
                <div>
                  <h3 className="font-serif text-xl sm:text-2xl text-white font-medium mb-1">
                    Client & Delivery Address
                  </h3>
                  <p className="text-xs text-[#8e8a81]">
                    Where should our Chennai atelier dispatch your signature flacon?
                  </p>
                </div>

                <div className="space-y-4 text-xs">
                  <div>
                    <label className="block text-[#a8a398] mb-1 tracking-wider uppercase text-[10px]">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full bg-[#15151c] border border-[#2b2b3a] px-3.5 py-3 text-white focus:outline-none focus:border-[#c5a059]"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[#a8a398] mb-1 tracking-wider uppercase text-[10px]">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-[#15151c] border border-[#2b2b3a] px-3.5 py-3 text-white focus:outline-none focus:border-[#c5a059]"
                      />
                    </div>
                    <div>
                      <label className="block text-[#a8a398] mb-1 tracking-wider uppercase text-[10px]">
                        Phone (+91) *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-[#15151c] border border-[#2b2b3a] px-3.5 py-3 text-white focus:outline-none focus:border-[#c5a059]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[#a8a398] mb-1 tracking-wider uppercase text-[10px]">
                      Street Address *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.address}
                      onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                      className="w-full bg-[#15151c] border border-[#2b2b3a] px-3.5 py-3 text-white focus:outline-none focus:border-[#c5a059]"
                    />
                  </div>

                  <div>
                    <label className="block text-[#a8a398] mb-1 tracking-wider uppercase text-[10px]">
                      Apartment, Suite, Unit (Optional)
                    </label>
                    <input
                      type="text"
                      value={formData.apartment}
                      onChange={(e) => setFormData({ ...formData, apartment: e.target.value })}
                      className="w-full bg-[#15151c] border border-[#2b2b3a] px-3.5 py-3 text-white focus:outline-none focus:border-[#c5a059]"
                    />
                  </div>

                  <div className="grid grid-cols-3 gap-3">
                    <div>
                      <label className="block text-[#a8a398] mb-1 tracking-wider uppercase text-[10px]">
                        City *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        className="w-full bg-[#15151c] border border-[#2b2b3a] px-3 py-3 text-white focus:outline-none focus:border-[#c5a059]"
                      />
                    </div>
                    <div>
                      <label className="block text-[#a8a398] mb-1 tracking-wider uppercase text-[10px]">
                        State *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.state}
                        onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                        className="w-full bg-[#15151c] border border-[#2b2b3a] px-3 py-3 text-white focus:outline-none focus:border-[#c5a059]"
                      />
                    </div>
                    <div>
                      <label className="block text-[#a8a398] mb-1 tracking-wider uppercase text-[10px]">
                        PIN Code *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.pinCode}
                        onChange={(e) => setFormData({ ...formData, pinCode: e.target.value })}
                        className="w-full bg-[#15151c] border border-[#2b2b3a] px-3 py-3 text-white focus:outline-none focus:border-[#c5a059]"
                      />
                    </div>
                  </div>

                  {/* Packaging Options */}
                  <div className="pt-2">
                    <label className="block text-[#a8a398] mb-2 tracking-wider uppercase text-[10px]">
                      Packaging & Presentation
                    </label>
                    <div className="space-y-2">
                      <label
                        className={`flex items-center justify-between p-3 border cursor-pointer ${
                          formData.shippingOption === 'express'
                            ? 'border-[#c5a059] bg-[#c5a059]/10'
                            : 'border-[#262633] bg-[#14141b]'
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          <input
                            type="radio"
                            name="shippingOption"
                            checked={formData.shippingOption === 'express'}
                            onChange={() => setFormData({ ...formData, shippingOption: 'express' })}
                            className="text-[#c5a059]"
                          />
                          <span>Signature Embossed Hardbox Packaging</span>
                        </div>
                        <span className="text-[#c5a059]">Included</span>
                      </label>

                      <label
                        className={`flex items-center justify-between p-3 border cursor-pointer ${
                          formData.shippingOption === 'gift'
                            ? 'border-[#c5a059] bg-[#c5a059]/10'
                            : 'border-[#262633] bg-[#14141b]'
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          <input
                            type="radio"
                            name="shippingOption"
                            checked={formData.shippingOption === 'gift'}
                            onChange={() => setFormData({ ...formData, shippingOption: 'gift' })}
                            className="text-[#c5a059]"
                          />
                          <span className="flex items-center gap-1.5">
                            <Gift className="w-3.5 h-3.5 text-[#c5a059]" />
                            Bespoke Gift Wrap with Gold Silk Ribbon & Wax Seal
                          </span>
                        </div>
                        <span className="text-white">+₹199</span>
                      </label>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[#a8a398] mb-1 tracking-wider uppercase text-[10px]">
                      Complimentary Handwritten Gift Card Note (Optional)
                    </label>
                    <textarea
                      rows={2}
                      value={formData.giftMessage}
                      onChange={(e) => setFormData({ ...formData, giftMessage: e.target.value })}
                      placeholder="e.g. For our tenth anniversary — leave your signature."
                      className="w-full bg-[#15151c] border border-[#2b2b3a] px-3.5 py-2 text-white focus:outline-none focus:border-[#c5a059]"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-[#c5a059] hover:bg-[#d8b56d] text-[#09090b] text-xs font-semibold tracking-[0.2em] uppercase flex items-center justify-center gap-2 cursor-pointer transition-all shadow-lg active:scale-[0.98]"
                >
                  <span>CONTINUE TO PAYMENT</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>

              {/* Order Summary (5 cols) */}
              <div className="lg:col-span-5 bg-[#14141a] border border-[#242430] p-6 flex flex-col justify-between">
                <div>
                  <h4 className="font-serif text-lg text-white font-medium mb-4 pb-2 border-b border-[#21212b]">
                    Bag Summary ({cart.length} items)
                  </h4>

                  <div className="space-y-3 mb-6 max-h-56 overflow-y-auto pr-1">
                    {cart.map((item) => (
                      <div
                        key={`${item.product.id}-${item.size}`}
                        className="flex items-center justify-between text-xs"
                      >
                        <div className="flex items-center gap-2.5">
                          <img
                            src={item.product.image}
                            alt={item.product.name}
                            className="w-10 h-10 object-cover border border-[#2b2b38]"
                          />
                          <div>
                            <span className="font-medium text-white block line-clamp-1">
                              {item.product.name}
                            </span>
                            <span className="text-[10px] text-[#8e8a81]">
                              {item.size} × {item.quantity}
                            </span>
                          </div>
                        </div>
                        <span className="font-serif tabular-nums text-white">
                          ₹{(item.price * item.quantity).toLocaleString('en-IN')}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Privilege Promo Code */}
                  <form onSubmit={handleApplyCoupon} className="mb-6">
                    <div className="flex gap-2">
                      <input
                        type="text"
                        value={couponCode}
                        onChange={(e) => setCouponCode(e.target.value)}
                        placeholder="Privilege Code (try VERONA27SIGNATURE)"
                        className="flex-1 bg-[#0e0e12] border border-[#2b2b3a] px-3 py-2 text-xs text-white uppercase placeholder:text-[#66635c] focus:outline-none focus:border-[#c5a059]"
                      />
                      <button
                        type="submit"
                        className="px-3.5 py-2 bg-[#252532] hover:bg-[#c5a059] hover:text-black text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer"
                      >
                        Apply
                      </button>
                    </div>
                    {couponMessage && (
                      <p className="text-[11px] text-[#c5a059] mt-1.5">{couponMessage}</p>
                    )}
                  </form>

                  {/* Financial Breakdown */}
                  <div className="space-y-2 text-xs border-t border-[#21212b] pt-4 text-[#9e9a91]">
                    <div className="flex justify-between">
                      <span>Subtotal</span>
                      <span className="text-white tabular-nums">
                        ₹{subtotal.toLocaleString('en-IN')}
                      </span>
                    </div>

                    {appliedDiscount > 0 && (
                      <div className="flex justify-between text-[#c5a059]">
                        <span>Privilege Discount (10%)</span>
                        <span className="tabular-nums">-₹{appliedDiscount.toLocaleString('en-IN')}</span>
                      </div>
                    )}

                    <div className="flex justify-between">
                      <span>Shipping</span>
                      <span className="text-white">
                        {baseShippingCost === 0 ? 'Complimentary' : '₹150'}
                      </span>
                    </div>

                    {packagingFee > 0 && (
                      <div className="flex justify-between">
                        <span>Bespoke Gift Ribbon</span>
                        <span className="text-white tabular-nums">₹199</span>
                      </div>
                    )}
                  </div>
                </div>

                <div className="pt-4 border-t border-[#21212b] flex justify-between items-baseline mt-6">
                  <span className="text-xs uppercase tracking-widest text-[#cbc6bc]">
                    Total Payable
                  </span>
                  <span className="font-serif text-2xl text-white font-medium tabular-nums">
                    ₹{finalTotal.toLocaleString('en-IN')}
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* STEP 2: Payment */}
        {step === 'payment' && (
          <div className="p-6 sm:p-10 max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <span className="text-[11px] tracking-[0.25em] uppercase text-[#c5a059] font-medium block mb-1">
                STEP 02 OF 02
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-white font-medium">
                Select Payment Method
              </h3>
              <p className="text-xs text-[#8e8a81] mt-1">
                Total Order Value:{' '}
                <span className="text-white font-semibold tabular-nums">
                  ₹{finalTotal.toLocaleString('en-IN')}
                </span>
              </p>
            </div>

            <div className="space-y-3 mb-8">
              {/* Option 1: UPI */}
              <div
                onClick={() => setPaymentMethod('upi')}
                className={`p-4 border cursor-pointer transition-all flex items-center justify-between ${
                  paymentMethod === 'upi'
                    ? 'border-[#c5a059] bg-[#c5a059]/10'
                    : 'border-[#262633] bg-[#14141a]'
                }`}
              >
                <div className="flex items-center gap-3">
                  <QrCode className="w-5 h-5 text-[#c5a059]" />
                  <div>
                    <span className="text-sm font-medium text-white block">
                      UPI (Google Pay, PhonePe, Paytm, BHIM)
                    </span>
                    <span className="text-[11px] text-[#8e8a81]">
                      Instant approval with zero surcharge
                    </span>
                  </div>
                </div>
                <div
                  className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                    paymentMethod === 'upi' ? 'border-[#c5a059]' : 'border-[#444455]'
                  }`}
                >
                  {paymentMethod === 'upi' && (
                    <div className="w-2 h-2 rounded-full bg-[#c5a059]" />
                  )}
                </div>
              </div>

              {/* Option 2: Cards */}
              <div
                onClick={() => setPaymentMethod('card')}
                className={`p-4 border cursor-pointer transition-all flex items-center justify-between ${
                  paymentMethod === 'card'
                    ? 'border-[#c5a059] bg-[#c5a059]/10'
                    : 'border-[#262633] bg-[#14141a]'
                }`}
              >
                <div className="flex items-center gap-3">
                  <CreditCard className="w-5 h-5 text-[#c5a059]" />
                  <div>
                    <span className="text-sm font-medium text-white block">
                      Credit / Debit Cards
                    </span>
                    <span className="text-[11px] text-[#8e8a81]">
                      Visa, MasterCard, RuPay, American Express
                    </span>
                  </div>
                </div>
                <div
                  className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                    paymentMethod === 'card' ? 'border-[#c5a059]' : 'border-[#444455]'
                  }`}
                >
                  {paymentMethod === 'card' && (
                    <div className="w-2 h-2 rounded-full bg-[#c5a059]" />
                  )}
                </div>
              </div>

              {/* Option 3: COD */}
              <div
                onClick={() => setPaymentMethod('cod')}
                className={`p-4 border cursor-pointer transition-all flex items-center justify-between ${
                  paymentMethod === 'cod'
                    ? 'border-[#c5a059] bg-[#c5a059]/10'
                    : 'border-[#262633] bg-[#14141a]'
                }`}
              >
                <div className="flex items-center gap-3">
                  <Banknote className="w-5 h-5 text-[#c5a059]" />
                  <div>
                    <span className="text-sm font-medium text-white block">
                      Cash on Delivery (COD)
                    </span>
                    <span className="text-[11px] text-[#8e8a81]">
                      Pay cash upon delivery at your doorstep
                    </span>
                  </div>
                </div>
                <div
                  className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                    paymentMethod === 'cod' ? 'border-[#c5a059]' : 'border-[#444455]'
                  }`}
                >
                  {paymentMethod === 'cod' && (
                    <div className="w-2 h-2 rounded-full bg-[#c5a059]" />
                  )}
                </div>
              </div>
            </div>

            {paymentMethod === 'upi' && (
              <div className="p-4 bg-[#14141c] border border-[#262636] mb-6 text-xs text-[#ded9ce] flex items-center gap-3">
                <Sparkles className="w-4 h-4 text-[#c5a059] shrink-0" />
                <span>
                  Demo Mode: Order authorization will execute immediately without redirecting to a
                  third-party payment gateway.
                </span>
              </div>
            )}

            <div className="flex gap-4">
              <button
                onClick={() => setStep('details')}
                className="px-6 py-4 border border-[#2b2b3a] hover:border-white text-xs uppercase tracking-wider text-[#a8a398] hover:text-white cursor-pointer"
              >
                Back
              </button>
              <button
                onClick={handlePlaceOrder}
                disabled={isProcessing}
                className="flex-1 py-4 bg-[#c5a059] hover:bg-[#d8b56d] text-[#09090b] text-xs font-semibold tracking-[0.2em] uppercase flex items-center justify-center gap-2 cursor-pointer transition-all shadow-lg active:scale-[0.98] disabled:opacity-60"
              >
                <span>
                  {isProcessing
                    ? 'AUTHORIZING WITH ATELIER...'
                    : `AUTHORIZE & PLACE ORDER • ₹${finalTotal.toLocaleString('en-IN')}`}
                </span>
                <CheckCircle className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* STEP 3: Order Confirmation */}
        {step === 'confirmation' && completedOrder && (
          <div className="p-6 sm:p-12 max-w-2xl mx-auto text-center animate-in fade-in zoom-in-95 duration-300">
            <div className="w-16 h-16 bg-[#c5a059]/20 text-[#c5a059] rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-8 h-8" />
            </div>

            <span className="text-xs tracking-[0.3em] uppercase text-[#c5a059] font-medium block mb-2">
              SIGNATURE ORDER CONFIRMED
            </span>

            <h2 className="font-serif text-3xl sm:text-4xl text-white font-medium mb-3">
              Thank You, {completedOrder.customerName}
            </h2>

            <p className="text-xs sm:text-sm text-[#bbb6ac] max-w-md mx-auto mb-8 font-light leading-relaxed">
              Your order{' '}
              <span className="text-white font-mono font-medium">{completedOrder.orderId}</span> has
              been logged with our master perfumers in Chennai. Preparation begins immediately.
            </p>

            {/* Receipt Summary Card */}
            <div className="bg-[#14141a] border border-[#242432] p-6 text-left mb-8 space-y-4 text-xs">
              <div className="flex justify-between items-center pb-3 border-b border-[#21212c]">
                <span className="text-[#8e8a81]">Order Date</span>
                <span className="text-white">{completedOrder.date}</span>
              </div>
              <div className="flex justify-between items-center pb-3 border-b border-[#21212c]">
                <span className="text-[#8e8a81]">Dispatch From</span>
                <span className="text-white">VÉRONA 27 Atelier, Chennai, TN</span>
              </div>
              <div className="flex justify-between items-center pb-3 border-b border-[#21212c]">
                <span className="text-[#8e8a81]">Estimated Delivery</span>
                <span className="text-[#c5a059] font-medium">{completedOrder.estimatedDelivery}</span>
              </div>
              <div className="flex justify-between items-start pb-3 border-b border-[#21212c]">
                <span className="text-[#8e8a81]">Delivery Address</span>
                <span className="text-white text-right max-w-xs">{completedOrder.address}</span>
              </div>
              <div className="flex justify-between items-center pb-3 border-b border-[#21212c]">
                <span className="text-[#8e8a81]">Payment Confirmation</span>
                <span className="text-white">{completedOrder.paymentMethod}</span>
              </div>

              {/* Items List */}
              <div className="py-2">
                <span className="text-[10px] tracking-wider uppercase text-[#736f66] block mb-2">
                  Flacons Reserved:
                </span>
                {completedOrder.items.map((it: any) => (
                  <div
                    key={`${it.product.id}-${it.size}`}
                    className="flex justify-between text-[#cbc6bc] py-1"
                  >
                    <span>
                      {it.product.name} ({it.size}) × {it.quantity}
                    </span>
                    <span className="tabular-nums">
                      ₹{(it.price * it.quantity).toLocaleString('en-IN')}
                    </span>
                  </div>
                ))}
              </div>

              <div className="pt-3 border-t border-[#21212c] flex justify-between items-baseline">
                <span className="text-xs uppercase tracking-wider text-[#cbc6bc]">Total Paid</span>
                <span className="font-serif text-xl text-white font-medium tabular-nums">
                  ₹{completedOrder.total.toLocaleString('en-IN')}
                </span>
              </div>
            </div>

            <button
              onClick={handleClose}
              className="px-8 py-4 bg-[#c5a059] hover:bg-[#d8b56d] text-[#09090b] text-xs font-semibold tracking-[0.2em] uppercase transition-colors cursor-pointer"
            >
              CONTINUE EXPLORING VÉRONA 27
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
