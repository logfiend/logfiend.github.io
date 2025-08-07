// Disable stop word filtering to allow common words (e.g., "what") in queries
if (!this._lf_stopwords_disabled && typeof lunr !== 'undefined') {
  try {
    this.pipeline.remove(lunr.stopWordFilter);
    this.searchPipeline.remove(lunr.stopWordFilter);
  } catch (e) {
    // ignore if already removed
  }
  this._lf_stopwords_disabled = true;
}
