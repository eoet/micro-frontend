const products = {
    porsche: {
        name: "Porche-Diesel Master 419", 
        img: "porsche.svg"
    },
    fendt: {
        name: "Fendt F20 Dieselro", 
        img: "fendt.svg"
    },
    eicher: {
        name: "Eicher Diesel 215/16", 
        img: "eicher.svg"
    }
};

class DecidePages extends HTMLElement {
    connectedCallback() {
        this.render(window.location);
        this.unlisten = window.appHistory.listen(location => 
            this.render(location)
        );
    }
    render(location) {
        console.log("route change (second level / decide)")
        const match = location.pathname.match("/product/(.*)")
        const product = match && products[match[1]]
        // if (product)
    }
}