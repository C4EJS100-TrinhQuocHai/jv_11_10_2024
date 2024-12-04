// tạo mảng danh sách sản phẩm

let products = [
    {
        id: 1,
        name: "táo 1",
        price: 5000,
        image: "images/tao1.jpg"
    },
    {
        id: 2,
        name: "táo 2",
        price: 6000,
        image: "images/tao2.jpg"
    },
    {
        id: 3,
        name: "táo 3",
        price: 7000,
        image: "images/tao3.jpg"
    },
    {
        id: 4,
        name: "táo 4",
        price: 8000,
        image: "images/tao4.jpg"
    },
    {
        id: 5,
        name: "táo 5",
        price: 9000,
        image: "images/tao5.jpg"
    }, {
        id: 6,
        name: "táo 6",
        price: 15000,
        image: "images/tao6.jpg"
    }
]
// tạo function đi hiển thị táo 
function showProduct() {
    let html = "";
    for (let i = 0; i < 6; i++) {
        html +=
            `
                    <div class="product">
                        <p>${products[i].name}</p>
                        <div>
                            <img src="../../${products[i].image}" alt="">
                        </div>
                        <p>giá: ${products[i].price}</p>
                        <button onclick="addToCart(${products[i].id})">Mua</button>
                    </div>
                `
    }
    document.getElementsByClassName("products")[0].innerHTML = html;

}
showProduct();
// function tiến hành đi mua hàng
// tạo mảng chứa các sản phẩm trong giỏ hàng
let cart=[];
function addToCart(idProduct) {
    // console.log("đi mua hàng!",id);
    let product = products.find(item => item.id == idProduct);
    console.log("product",product);
    // khi có sản phẩm rồi
    /*
        kiểm tra xem phần tử có trong cart hay không
            + nếu có rồi tăng số lượng
            + nếu không có thì thêm vào
     */
    // let check= cart.findIndex(item=>item.id==idProduct);
    let check =-1;
    for (let i = 0; i < cart.length; i++) {
            if(cart[i].id==idProduct){
                check=i;
                break;
            }
    }
    if(check==-1){
        // tức là không có thêm vào bình thường
        product.quantity=1;
        cart.push(product);
        // console.log("giỏ hàng",cart);
        showCart();
    }else{
        // có sản phẩm trong giỏ hàng rồi đi tăng số lượng
        cart[check].quantity = ++cart[check].quantity;
        // console.log("giỏ hàng", cart);
        showCart();
    }
}
// tạo function đi hiển thị giỏ hàng
 function showCart(){
    let html="";
    let sum=0;
    for(let i=0; i<cart.length; i++){
        html +=
            `
                 <tr>
                        <td>${i+1}</td>
                        <td>
                            ${cart[i].name}
                        </td>
                        <td>
                            <img src="../../${cart[i].image}" alt="">
                        </td>
                        <td>
                           ${cart[i].price}
                        </td>
                        <td>
                            <button>-</button>
                                ${cart[i].quantity}
                            <button>+</button>
                        </td>
                        <td>
                            ${cart[i].quantity*cart[i].price}
                        </td>
                        <td>
                            <button>xóa</button>
                        </td>
                    </tr>
            `
        sum += cart[i].quantity * cart[i].price
    }
    document.getElementById("tbody").innerHTML=html;
     document.getElementById("total").innerHTML = sum;

 }


