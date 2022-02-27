module.exports = async function (context, myBlob) {
  context.log('JavaScript blob trigger function processed blob \n Blob:', context.bindingData.blobTrigger, '\n Blob Size:', myBlob.length, 'Bytes')
  context.bindings.myOutputBlob = context.bindings.myBlob
  context.bindings.outputSbTopic = {
    fileReceived: context.bindingData.blobTrigger,
    acknowledgementFile: `${context.bindingData.blobTrigger}.ack`,
    acknowledged: new Date()
  }
}
