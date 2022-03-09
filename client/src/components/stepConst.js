function variable(){


    const step1= `<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous"/>`;
    const step2= `<div class="d-grid gap-2 d-md-flex justify-content-md-end fixed-bottom">
    <button class="rounded-circle" style="outline: none; border: none;" data-bs-toggle="modal" data-bs-target="#ModalFormCrypto" data-bs-whatever="@mdo">
        <img type="button" src="https://www.buymeacoffee.com/assets/img/guidelines/logo-mark-3.svg" class="img-thumbnail rounded-circle mx-auto" style="width: 4rem ; height: 4rem;" alt="NothingToShow">
    </button>
</div>`;
    const step3 = `<div class="modal fade" id="ModalFormCrypto" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <div class="container text-center">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/MetaMask_Fox.svg/512px-MetaMask_Fox.svg.png?20201112074605" class="rounded-circle img-thumbnail" style="width: 20% !important; height: 20% !important;" alt="">
                    <h5 class="modal-title" id="exampleModalLabel">Send Your Crypto</h5>
                </div>
            </div>
            <div class="modal-body">
                <form>
                    <div class="mb-3">
                        <label for="recipient-name" class="col-form-label">Adress to Send: </label>
                        <input type="text" class="form-control" id="recipient-name">
                    </div>
                    <div class="mb-3">
                        <label for="recipient-name" class="col-form-label">Amount to send:</label>
                        <input type="number" class="form-control" id="recipient-name">
                    </div>
                    <div class="dropdown">
                        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">Select your cryptocurrency</button>
                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                            <li><a class="dropdown-item" href="#">Tron</a></li>
                            <li><a class="dropdown-item" href="#">Bitcoin</a></li>
                            <li><a class="dropdown-item" href="#">Etherium</a></li>
                        </ul>
                    </div>
                </form>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary">Send cryptocurrency</button>
            </div>
        </div>
    </div>
</div>`;
    const step4 =  step = `<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>`;

    const stepArr =[step1, step2, step3, step4];
    return stepArr;
}