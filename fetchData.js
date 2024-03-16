function* dataGenerator() {

    const data =['Donnée 1', 'Donnée 2', 'Donnée 3'];
    for (let i = 0; i < data.length; i++) {
        //simuller une opération asynchrone avec un délai .
        yield new Promise(resolve => setTimeout(() => resolve(data[i]), 1000));

    }
}

async function consumeData() {
    const generator = dataGenerator(); //inisialisé le generateur 

    for (let promise of generator){
        const data = await promise; //Attendre la resolution de chaque promise generée
        console.log(data);


    }
}
consumeData()