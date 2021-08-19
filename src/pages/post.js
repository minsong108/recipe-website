import React from 'react';
import UploadForm from './handlePost/UploadForm';
import ImageGrid from './handlePost/ImageGrid';
import { auth } from '../firebase';

function Post() {

    if (auth.currentUser == null) {
        return (
            <div>Please Log in to continue</div>
        )
    }
    else {
        return (
            <div>
                <UploadForm />
                <ImageGrid />
            </div>
        )
    }
}

export default Post