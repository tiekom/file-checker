<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Vue File Checker</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-grid>
        <ion-row class="ion-margin">
          <ion-col v-if="!file" :class="['zone ion-text-center ', dragging ? 'dragging' : '']"
                   @dragenter="dragging = true"
                   @dragleave="dragging = false" sizeLg="6" sizeMd="6" sizeSm="12"
                   sizeXl="6" sizeXs="12">
            <div class="relative-center">
              <ion-text @drag="onDrag"><h3>Drag and Drop file or click to upload</h3></ion-text>
            </div>
            <label for="file" style="display: none">import file from explorer</label>
            <input name="file" id="file" type="file" @change="onChange">
          </ion-col>
          <ion-col v-else class="zone-success ion-text-center" sizeLg="6" sizeMd="6" sizeSm="12"
                   sizeXl="6" sizeXs="12">
            <div class="relative-center">
              <ion-text color="success"><h3 class="ion-no-margin">{{ file.name }}</h3></ion-text><br>
              <ion-button type="button" @click="removeFile">Remove File</ion-button>
            </div>
          </ion-col>
          <ion-col v-if="file" sizeLg="6" sizeMd="6" sizeSm="12"
                   sizeXl="6" sizeXs="12">
            <ion-text><h1 class="ion-no-margin">Information</h1></ion-text>
            <ion-text class="ion-no-margin"><h2 class="ion-no-margin">Name</h2></ion-text>
            <ion-text class="ion-no-margin"><h3 class="ion-no-margin">{{ file.name }}</h3></ion-text>
            <ion-text class="ion-no-margin"><h2 class="ion-no-margin">Size</h2></ion-text>
            <ion-text class="ion-no-margin"><h3 class="ion-no-margin">{{ file.size }}</h3></ion-text>
            <ion-text class="ion-no-margin"><h2 class="ion-no-margin">Type</h2></ion-text>
            <ion-text class="ion-no-margin"><h3 class="ion-no-margin">{{ file.type }}</h3></ion-text>
          </ion-col>
        </ion-row>
      </ion-grid>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import {
  IonButton,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonPage,
  IonRow,
  IonText,
  IonTitle,
  IonToolbar
} from '@ionic/vue';

export default defineComponent({
  name: 'MainPage',
  components: {IonHeader, IonToolbar, IonTitle, IonContent, IonPage, IonGrid, IonCol, IonRow, IonText, IonButton},
  data(): { files: (FileList | null), dragging: boolean, file: (File | null) } {
    return {files: null, dragging: false, file: null}
  },
  methods: {
    onChange(e: Event) {
      const target = e.target as HTMLInputElement;
      const files = target.files;
      if (!files || files[0]) {
        this.files = files;
        this.dragging = false;
        if (this.files !== null)
          this.createFile(this.files[0]);
      }
    },
    onDrag(e: DragEvent) {
      const target = e.dataTransfer as DataTransfer;
      const files = target.files;
      if (!files || files[0]) {
        this.files = files;
        this.dragging = false;
        if (this.files !== null)
          this.createFile(this.files[0]);
      }
    },
    createFile(file: File) {
      this.file = file;
      console.log(this.file.arrayBuffer());
      this.dragging = false;
    },
    removeFile() {
      this.file = null;
    }
  }
});
</script>

<style lang="scss" src="./MainPage.scss"></style>
