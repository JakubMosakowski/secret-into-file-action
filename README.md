# Secret into file action

Action that decodes secret using gpg

## Inputs

### `secret`

**Required** Secret to be decrypted.

### `passphrase`

**Required** Passphrase needed for file decryption.

### `filename`

**Required** Name of output file.

## Example usage

uses: JakubMosakowski/secret-into-file-action@v1.0.0  
with:  
  secret: ${{ secrets.SECRET_VALUE }}  
  passphrase: ${{ secrets.PASSPHRASE }}  
  filename: "path/to/file/file.txt"
