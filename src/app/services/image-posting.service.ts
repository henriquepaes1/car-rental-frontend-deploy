import { HttpClient, HttpEventType } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImagePostingService {

  constructor(private http: HttpClient) { }

  postImage(selectedFile: File) {
    const fd = new FormData();
    fd.append('file', selectedFile, selectedFile.name);

    this.http.post<any>("http://localhost:8080/uploadFile", fd, {
      reportProgress: true,
    })
    .subscribe(response => {});

  }

}
