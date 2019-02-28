// Prettified with <https://jsonformatter.org/json-pretty-print>
// JSON serialization is courtesy of Alex's ProcessData.java
// A loose specification of the format is as follows:
//
// Results: {
//   query: String,
//   resultCount: int?,
//   resultIndex: int,
//   sequences: [],
// }
//
// Sequence { // Chromosome
//   sequenceName: String,
//   genes: [],
// }
//
// Genes {
//   geneId: String,
//   geneName: String,
//   start: int,
//   end: int,
//   transcripts: [],
// }
//
// Transcripts {
//   transcriptName: String,
//   transcriptId: String,
//   start: int,
//   end: int,
//   exons: [],
//   ranges: [], // Added because some ranges (UTR) aren’t linked to exons
// }
//
// Exon {
//   exonNumber: int,
//   exonVersion: int,
//   start: int,
//   end: int,
//   ranges: [], // Shortened to a single array t
// }
//
// Range {
//   start: int,
//   end: int,
//   type: String, // {CDS, UTR, startCodon, or endCodon}
// }

export const sampleData = {
  "query": "", // TODO
  "resultIndex": 0, // TODO
  "sequences": [
    {
      "sequenceName": "3L",
      "genes": [
        {
          "geneName": "ABCB7",
          "start": 1618414,
          "end": 1623413,
          "geneId": "FBgn0035244",
          "transcripts": [
            {
              "transcriptName": "ABCB7-RA",
              "start": 1618414,
              "end": 1623413,
              "transcriptId": "FBtr0072754",
              "exons": [
                {
                  "exonNumber": 1,
                  "start": 1618414,
                  "end": 1618617,
                  "exonId": "FBgn0035244:1",
                  "exonVersion": 1,
                  "ranges": [
                    {
                      "start": 1618501,
                      "end": 1618617,
                      "type": "CDS"
                    },
                    {
                      "start": 1618501,
                      "end": 1618503,
                      "type": "start_codon"
                    }
                  ]
                },
                {
                  "exonNumber": 2,
                  "start": 1620428,
                  "end": 1620554,
                  "exonId": "FBgn0035244:2",
                  "exonVersion": 1,
                  "ranges": [
                    {
                      "start": 1620428,
                      "end": 1620554,
                      "type": "CDS"
                    }
                  ]
                },
                {
                  "exonNumber": 3,
                  "start": 1620817,
                  "end": 1621042,
                  "exonId": "FBgn0035244:3",
                  "exonVersion": 1,
                  "ranges": [
                    {
                      "start": 1620817,
                      "end": 1621042,
                      "type": "CDS"
                    }
                  ]
                },
                {
                  "exonNumber": 4,
                  "start": 1621103,
                  "end": 1621257,
                  "exonId": "FBgn0035244:5",
                  "exonVersion": 1,
                  "ranges": [
                    {
                      "start": 1621103,
                      "end": 1621257,
                      "type": "CDS"
                    }
                  ]
                },
                {
                  "exonNumber": 5,
                  "start": 1621317,
                  "end": 1622665,
                  "exonId": "FBgn0035244:6",
                  "exonVersion": 1,
                  "ranges": [
                    {
                      "start": 1621317,
                      "end": 1622665,
                      "type": "CDS"
                    }
                  ]
                },
                {
                  "exonNumber": 6,
                  "start": 1622732,
                  "end": 1623413,
                  "exonId": "FBgn0035244:8",
                  "exonVersion": 1,
                  "ranges": [
                    {
                      "start": 1622732,
                      "end": 1622986,
                      "type": "CDS"
                    },
                    {
                      "start": 1622987,
                      "end": 1622989,
                      "type": "stop_codon"
                    }
                  ]
                }
              ],
              "ranges": [
                {
                  "start": 1618414,
                  "end": 1618500,
                  "type": "UTR"
                },
                {
                  "start": 1622990,
                  "end": 1623413,
                  "type": "UTR"
                }
              ]
            },
            {
              "transcriptName": "ABCB7-RB",
              "start": 1618414,
              "end": 1623159,
              "transcriptId": "FBtr0072755",
              "exons": [
                {
                  "exonNumber": 1,
                  "start": 1618414,
                  "end": 1618617,
                  "exonId": "FBgn0035244:1",
                  "exonVersion": 1,
                  "ranges": [
                    {
                      "start": 1618501,
                      "end": 1618617,
                      "type": "CDS"
                    },
                    {
                      "start": 1618501,
                      "end": 1618503,
                      "type": "start_codon"
                    }
                  ]
                },
                {
                  "exonNumber": 2,
                  "start": 1620428,
                  "end": 1620554,
                  "exonId": "FBgn0035244:2",
                  "exonVersion": 1,
                  "ranges": [
                    {
                      "start": 1620428,
                      "end": 1620554,
                      "type": "CDS"
                    }
                  ]
                },
                {
                  "exonNumber": 3,
                  "start": 1620919,
                  "end": 1621042,
                  "exonId": "FBgn0035244:4",
                  "exonVersion": 1,
                  "ranges": [
                    {
                      "start": 1620919,
                      "end": 1621042,
                      "type": "CDS"
                    }
                  ]
                },
                {
                  "exonNumber": 4,
                  "start": 1621103,
                  "end": 1621257,
                  "exonId": "FBgn0035244:5",
                  "exonVersion": 1,
                  "ranges": [
                    {
                      "start": 1621103,
                      "end": 1621257,
                      "type": "CDS"
                    }
                  ]
                },
                {
                  "exonNumber": 5,
                  "start": 1621317,
                  "end": 1622665,
                  "exonId": "FBgn0035244:6",
                  "exonVersion": 1,
                  "ranges": [
                    {
                      "start": 1621317,
                      "end": 1622665,
                      "type": "CDS"
                    }
                  ]
                },
                {
                  "exonNumber": 6,
                  "start": 1622732,
                  "end": 1623159,
                  "exonId": "FBgn0035244:7",
                  "exonVersion": 1,
                  "ranges": [
                    {
                      "start": 1622732,
                      "end": 1622986,
                      "type": "CDS"
                    },
                    {
                      "start": 1622987,
                      "end": 1622989,
                      "type": "stop_codon"
                    }
                  ]
                }
              ],
              "ranges": [
                {
                  "start": 1618414,
                  "end": 1618500,
                  "type": "UTR"
                },
                {
                  "start": 1622990,
                  "end": 1623159,
                  "type": "UTR"
                }
              ]
            }
          ]
        }
      ]
    }
  ]
}
