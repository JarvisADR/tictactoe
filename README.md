Langkah Deployment

## 1. Persiapan Infrastruktur (Terraform)
Langkah ini akan "membeli" server dan jaringan di Azure.

1.  Login ke Azure CLI:
    ```bash
    az login
    ```
2.  Inisialisasi dan Apply Terraform (di folder infrastructre):
    ```bash
    terraform init
    terraform apply -auto-approve
    ```
    > muncul `bljracr36wi3m.azurecr.io`

### 2. Build & Push Image (Docker)
1.  Login ke ACR:
    ```bash
    az acr login --name bljracr36wi3m.azurecr.io
    ```
3.  Build Docker Image:
    ```bash
    docker build -t bljracr36wi3m.azurecr.io/tictactoe:v1 .
    ```
4.  Push Image ke Azure:
    ```bash
    docker push bljracr36wi3m.azurecr.io/tictactoe:v1
    ```

### 3. Deploy ke Kubernetes (AKS)
Menjalankan container yang sudah di-upload ke dalam cluster Kubernetes.

1.  Sambungkan terminal lokal ke Cluster AKS:
    ```bash
    az aks get-credentials --resource-group bljr-rg --name bljr-aks
    ```
2.  Terapkan Deployment (di kubernetes):
    ```bash
    kubectl apply -f deployment.yaml
    ```

### 4. Cek Hasil & Akses Aplikasi
1.  Cek status service untuk mendapatkan Public IP:
    ```bash
    kubectl get service tictactoe-service --watch
    ```
2.  Akan diberikan IP.
3.  Copy ip ke browser

---

## Hapus
Hancurkan semua resource:
    ```bash
    terraform destroy -auto-approve
    ```