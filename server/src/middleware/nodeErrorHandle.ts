const nodeErrorHandle = (err:NodeJS.ErrnoException ): void => {
    switch(err.code) {
        case 'EACCES' || 'EADDRINUSE':
            process.exit(1);
            break;
        default:
            throw err;
        
    }
}

export default nodeErrorHandle;