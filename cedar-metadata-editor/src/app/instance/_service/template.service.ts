import {Injectable} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {BehaviorSubject} from 'rxjs';

import {FileNode} from '../_models/file-node';

const TEMPLATE_DATA = JSON.stringify({
  '@id': 'https://repo.staging.metadatacenter.org/templates/9339cac2-a3a7-49f6-9b4f-73a3fa3a5188',
  '@type': 'https://schema.metadatacenter.org/core/Template',
  '@context': {
    'xsd': 'http://www.w3.org/2001/XMLSchema#',
    'pav': 'http://purl.org/pav/',
    'bibo': 'http://purl.org/ontology/bibo/',
    'oslc': 'http://open-services.net/ns/core#',
    'schema': 'http://schema.org/',
    'schema:name': {
      '@type': 'xsd:string'
    },
    'schema:description': {
      '@type': 'xsd:string'
    },
    'pav:createdOn': {
      '@type': 'xsd:dateTime'
    },
    'pav:createdBy': {
      '@type': '@id'
    },
    'pav:lastUpdatedOn': {
      '@type': 'xsd:dateTime'
    },
    'oslc:modifiedBy': {
      '@type': '@id'
    }
  },
  'type': 'object',
  'title': 'One template template schema',
  'description': 'One template template schema generated by the CEDAR Template Editor 2.2.6',
  '_ui': {
    'pages': [],
    'order': [
      'one field',
      'title'
    ],
    'propertyLabels': {
      'one field': 'one field',
      'title': 'title'
    },
    'propertyDescriptions': {
      'one field': '',
      'title': 'Help Text'
    }
  },
  'properties': {
    '@context': {
      'type': 'object',
      'properties': {
      'rdfs': {
        'type': 'string',
          'format': 'uri',
          'enum': [
          'http://www.w3.org/2000/01/rdf-schema#'
        ]
      },
      'xsd': {
        'type': 'string',
        'format': 'uri',
        'enum': [
            'http://www.w3.org/2001/XMLSchema#'
        ]
      },
      'pav': {
        'type': 'string',
        'format': 'uri',
        'enum': [
          'http://purl.org/pav/'
        ]
      },
      'schema': {
        'type': 'string',
        'format': 'uri',
        'enum': [
          'http://schema.org/'
        ]
      },
      'oslc': {
        'type': 'string',
        'format': 'uri',
        'enum': [
          'http://open-services.net/ns/core#'
        ]
      },
      'skos': {
        'type': 'string',
        'format': 'uri',
        'enum': [
          'http://www.w3.org/2004/02/skos/core#'
        ]
      },
      'rdfs:label': {
        'type': 'object',
        'properties': {
          '@type': {
            'type': 'string',
              'enum': [
              'xsd:string'
            ]
          }
        }
      },
      'schema:isBasedOn': {
        'type': 'object',
        'properties': {
          '@type': {
            'type': 'string',
              'enum': [
              '@id'
            ]
          }
        }
      },
      'schema:name': {
        'type': 'object',
        'properties': {
          '@type': {
            'type': 'string',
              'enum': [
              'xsd:string'
            ]
          }
        }
      },
      'schema:description': {
        'type': 'object',
        'properties': {
          '@type': {
            'type': 'string',
              'enum': [
              'xsd:string'
            ]
          }
        }
      },
      'pav:createdOn': {
        'type': 'object',
          'properties': {
          '@type': {
            'type': 'string',
              'enum': [
              'xsd:dateTime'
            ]
          }
        }
      },
      'pav:createdBy': {
        'type': 'object',
        'properties': {
          '@type': {
            'type': 'string',
              'enum': [
              '@id'
            ]
          }
        }
      },
      'pav:lastUpdatedOn': {
        'type': 'object',
          'properties': {
          '@type': {
            'type': 'string',
              'enum': [
              'xsd:dateTime'
            ]
          }
        }
      },
      'oslc:modifiedBy': {
        'type': 'object',
          'properties': {
          '@type': {
            'type': 'string',
              'enum': [
              '@id'
            ]
          }
        }
      },
      'skos:notation': {
        'type': 'object',
          'properties': {
          '@type': {
            'type': 'string',
              'enum': [
              'xsd:string'
            ]
          }
        }
      },
      'one field': {
        'enum': [
          'https://schema.staging.metadatacenter.org/properties/f0117f8f-e1c8-4c03-af6c-f96fd8a752fe'
        ]
      },
      'title': {
        'enum': [
          'https://schema.staging.metadatacenter.org/properties/16031ded-d424-45c7-ae5e-9f5cb0af1821'
        ]
      }
    },
    'required': [
      'xsd',
      'pav',
      'schema',
      'oslc',
      'schema:isBasedOn',
      'schema:name',
      'schema:description',
      'pav:createdOn',
      'pav:createdBy',
      'pav:lastUpdatedOn',
      'oslc:modifiedBy',
      'one field'
    ],
      'additionalProperties': false
  },
  '@id': {
    'type': 'string',
      'format': 'uri'
  },
  '@type': {
    'oneOf': [
      {
        'type': 'string',
        'format': 'uri'
      },
      {
        'type': 'array',
        'minItems': 1,
        'items': {
          'type': 'string',
          'format': 'uri'
        },
        'uniqueItems': true
      }
    ]
  },
  'schema:isBasedOn': {
    'type': 'string',
      'format': 'uri'
  },
  'schema:name': {
    'type': 'string',
      'minLength': 1
  },
  'schema:description': {
    'type': 'string'
  },
  'pav:createdOn': {
    'type': [
      'string',
      'null'
    ],
      'format': 'date-time'
  },
  'pav:createdBy': {
    'type': [
      'string',
      'null'
    ],
      'format': 'uri'
  },
  'pav:lastUpdatedOn': {
    'type': [
      'string',
      'null'
    ],
      'format': 'date-time'
  },
  'oslc:modifiedBy': {
    'type': [
      'string',
      'null'
    ],
      'format': 'uri'
  },
  'one field': {
    'type': 'array',
      'minItems': 1,
      'items': {
      'type': 'object',
        '@id': 'https://repo.staging.metadatacenter.org/template-elements/c9492fd2-8889-4c86-949a-005bd8d59284',
        '@type': 'https://schema.metadatacenter.org/core/TemplateElement',
        '@context': {
        'xsd': 'http://www.w3.org/2001/XMLSchema#',
          'pav': 'http://purl.org/pav/',
          'bibo': 'http://purl.org/ontology/bibo/',
          'oslc': 'http://open-services.net/ns/core#',
          'schema': 'http://schema.org/',
          'schema:name': {
          '@type': 'xsd:string'
        },
        'schema:description': {
          '@type': 'xsd:string'
        },
        'pav:createdOn': {
          '@type': 'xsd:dateTime'
        },
        'pav:createdBy': {
          '@type': '@id'
        },
        'pav:lastUpdatedOn': {
          '@type': 'xsd:dateTime'
        },
        'oslc:modifiedBy': {
          '@type': '@id'
        }
      },
      'title': 'one field field schema',
        'description': 'one field field schema generated by the CEDAR Template Editor 2.2.6',
        '_ui': {
        'order': [
          'field'
        ],
          'propertyLabels': {
          'field': 'field'
        },
        'propertyDescriptions': {
          'field': 'Help Text'
        }
      },
      'properties': {
        '@context': {
          'type': 'object',
            'properties': {
            'field': {
              'enum': [
                'https://schema.staging.metadatacenter.org/properties/8a1c35cd-c2dc-4622-9f9a-36cf1b8e4560'
              ]
            }
          },
          'additionalProperties': false,
            'required': [
            'field'
          ]
        },
        '@id': {
          'type': 'string',
            'format': 'uri'
        },
        '@type': {
          'oneOf': [
            {
              'type': 'string',
              'format': 'uri'
            },
            {
              'type': 'array',
              'minItems': 1,
              'items': {
                'type': 'string',
                'format': 'uri'
              },
              'uniqueItems': true
            }
          ]
        },
        'field': {
          'type': 'array',
            'minItems': 1,
            'items': {
            'type': 'object',
              '@id': 'https://repo.staging.metadatacenter.org/template-fields/2426e170-115c-414f-888a-54c021499487',
              '@type': 'https://schema.metadatacenter.org/core/TemplateField',
              '@context': {
              'xsd': 'http://www.w3.org/2001/XMLSchema#',
                'pav': 'http://purl.org/pav/',
                'bibo': 'http://purl.org/ontology/bibo/',
                'oslc': 'http://open-services.net/ns/core#',
                'schema': 'http://schema.org/',
                'skos': 'http://www.w3.org/2004/02/skos/core#',
                'schema:name': {
                '@type': 'xsd:string'
              },
              'schema:description': {
                '@type': 'xsd:string'
              },
              'skos:prefLabel': {
                '@type': 'xsd:string'
              },
              'skos:altLabel': {
                '@type': 'xsd:string'
              },
              'pav:createdOn': {
                '@type': 'xsd:dateTime'
              },
              'pav:createdBy': {
                '@type': '@id'
              },
              'pav:lastUpdatedOn': {
                '@type': 'xsd:dateTime'
              },
              'oslc:modifiedBy': {
                '@type': '@id'
              }
            },
            'title': 'field field schema',
              'description': 'field field schema generated by the CEDAR Template Editor 2.2.6',
              '_ui': {
              'inputType': 'textfield'
            },
            '_valueConstraints': {
              'requiredValue': false
            },
            'properties': {
              '@type': {
                'oneOf': [
                  {
                    'type': 'string',
                    'format': 'uri'
                  },
                  {
                    'type': 'array',
                    'minItems': 1,
                    'items': {
                      'type': 'string',
                      'format': 'uri'
                    },
                    'uniqueItems': true
                  }
                ]
              },
              '@value': {
                'type': [
                  'string',
                  'null'
                ]
              },
              'rdfs:label': {
                'type': [
                  'string',
                  'null'
                ]
              }
            },
            'required': [
              '@value'
            ],
              'additionalProperties': false,
              'pav:createdOn': '2019-01-28T14:40:59-0800',
              'pav:createdBy': 'https://metadatacenter.org/users/bcec3d33-faf5-447a-ac96-683d8bf8c7b8',
              'pav:lastUpdatedOn': '2019-01-28T14:40:59-0800',
              'oslc:modifiedBy': 'https://metadatacenter.org/users/bcec3d33-faf5-447a-ac96-683d8bf8c7b8',
              'schema:schemaVersion': '1.5.0',
              'schema:name': 'field',
              'schema:description': 'Help Text',
              '$schema': 'http://json-schema.org/draft-04/schema#'
          }
        }
      },
      'required': [
        '@context',
        '@id',
        'field'
      ],
        'additionalProperties': false,
        'pav:createdOn': '2019-01-28T14:41:45-0800',
        'pav:createdBy': 'https://metadatacenter.org/users/bcec3d33-faf5-447a-ac96-683d8bf8c7b8',
        'pav:lastUpdatedOn': '2019-01-28T14:41:45-0800',
        'oslc:modifiedBy': 'https://metadatacenter.org/users/bcec3d33-faf5-447a-ac96-683d8bf8c7b8',
        'schema:schemaVersion': '1.5.0',
        'schema:name': 'one field',
        'schema:description': '',
        'pav:version': '0.0.1',
        'bibo:status': 'bibo:draft',
        '$schema': 'http://json-schema.org/draft-04/schema#'
    }
  },
  'title': {
    'type': 'array',
      'minItems': 1,
      'items': {
      'type': 'object',
        '@type': 'https://schema.metadatacenter.org/core/TemplateField',
        '@context': {
        'xsd': 'http://www.w3.org/2001/XMLSchema#',
          'pav': 'http://purl.org/pav/',
          'bibo': 'http://purl.org/ontology/bibo/',
          'oslc': 'http://open-services.net/ns/core#',
          'schema': 'http://schema.org/',
          'skos': 'http://www.w3.org/2004/02/skos/core#',
          'schema:name': {
          '@type': 'xsd:string'
        },
        'schema:description': {
          '@type': 'xsd:string'
        },
        'skos:prefLabel': {
          '@type': 'xsd:string'
        },
        'skos:altLabel': {
          '@type': 'xsd:string'
        },
        'pav:createdOn': {
          '@type': 'xsd:dateTime'
        },
        'pav:createdBy': {
          '@type': '@id'
        },
        'pav:lastUpdatedOn': {
          '@type': 'xsd:dateTime'
        },
        'oslc:modifiedBy': {
          '@type': '@id'
        }
      },
      'title': 'title field schema',
        'description': 'title field schema generated by the CEDAR Template Editor 2.2.6',
        '_ui': {
        'inputType': 'textfield'
      },
      '_valueConstraints': {
        'requiredValue': false
      },
      'properties': {
        '@type': {
          'oneOf': [
            {
              'type': 'string',
              'format': 'uri'
            },
            {
              'type': 'array',
              'minItems': 1,
              'items': {
                'type': 'string',
                'format': 'uri'
              },
              'uniqueItems': true
            }
          ]
        },
        '@value': {
          'type': [
            'string',
            'null'
          ]
        },
        'rdfs:label': {
          'type': [
            'string',
            'null'
          ]
        }
      },
      'required': [
        '@value'
      ],
        'additionalProperties': false,
        'pav:createdOn': '2019-01-28T14:41:45-0800',
        'pav:createdBy': 'https://metadatacenter.org/users/bcec3d33-faf5-447a-ac96-683d8bf8c7b8',
        'pav:lastUpdatedOn': '2019-01-28T14:41:45-0800',
        'oslc:modifiedBy': 'https://metadatacenter.org/users/bcec3d33-faf5-447a-ac96-683d8bf8c7b8',
        'schema:schemaVersion': '1.5.0',
        'schema:name': 'title',
        'schema:description': 'Help Text',
        '@id': 'https://repo.staging.metadatacenter.org/template-fields/744026f6-66ed-4541-8bfd-fea309d7ad81',
        '$schema': 'http://json-schema.org/draft-04/schema#'
    }
  }
},
  'required': [
  '@context',
  '@id',
  'schema:isBasedOn',
  'schema:name',
  'schema:description',
  'pav:createdOn',
  'pav:createdBy',
  'pav:lastUpdatedOn',
  'oslc:modifiedBy',
  'one field',
  'title'
],
  'schema:name': 'one template',
  'schema:description': '',
  'pav:createdOn': '2019-01-28T14:41:34-0800',
  'pav:createdBy': 'https://metadatacenter.org/users/bcec3d33-faf5-447a-ac96-683d8bf8c7b8',
  'pav:lastUpdatedOn': '2019-01-28T14:41:45-0800',
  'oslc:modifiedBy': 'https://metadatacenter.org/users/bcec3d33-faf5-447a-ac96-683d8bf8c7b8',
  'schema:schemaVersion': '1.5.0',
  'additionalProperties': false,
  'pav:version': '0.0.1',
  'bibo:status': 'bibo:draft',
  '$schema': 'http://json-schema.org/draft-04/schema#'
});
const METADATA_DATA = JSON.stringify({
  '@context': {
    'rdfs': 'http://www.w3.org/2000/01/rdf-schema#',
    'xsd': 'http://www.w3.org/2001/XMLSchema#',
    'pav': 'http://purl.org/pav/',
    'schema': 'http://schema.org/',
    'oslc': 'http://open-services.net/ns/core#',
    'skos': 'http://www.w3.org/2004/02/skos/core#',
    'rdfs:label': {
      '@type': 'xsd:string'
    },
    'schema:isBasedOn': {
      '@type': '@id'
    },
    'schema:name': {
      '@type': 'xsd:string'
    },
    'schema:description': {
      '@type': 'xsd:string'
    },
    'pav:createdOn': {
      '@type': 'xsd:dateTime'
    },
    'pav:createdBy': {
      '@type': '@id'
    },
    'pav:lastUpdatedOn': {
      '@type': 'xsd:dateTime'
    },
    'oslc:modifiedBy': {
      '@type': '@id'
    },
    'skos:notation': {
      '@type': 'xsd:string'
    },
    'one field': 'https://schema.staging.metadatacenter.org/properties/f0117f8f-e1c8-4c03-af6c-f96fd8a752fe',
    'title': 'https://schema.staging.metadatacenter.org/properties/16031ded-d424-45c7-ae5e-9f5cb0af1821'
  },
  'one field': [
    {
      '@context': {
        'field': 'https://schema.staging.metadatacenter.org/properties/8a1c35cd-c2dc-4622-9f9a-36cf1b8e4560'
      },
      'field': [
        {
          '@value': 'one'
        },
        {
          '@value': 'two'
        }
      ],
      '@id': 'https://repo.staging.metadatacenter.org/template-element-instances/1995b77c-6da7-4589-b836-826b1469a17e'
    },
    {
      '@context': {
        'field': 'https://schema.staging.metadatacenter.org/properties/8a1c35cd-c2dc-4622-9f9a-36cf1b8e4560'
      },
      'field': [
        {
          '@value': 'three'
        },
        {
          '@value': 'four'
        }
      ],
      '@id': 'https://repo.staging.metadatacenter.org/template-element-instances/84f21ecb-ab38-45e1-905c-5a9ecb2384c7'
    }
  ],
  'title': [
    {
      '@value': 'five'
    },
    {
      '@value': 'six'
    }
  ],
  'schema:isBasedOn': 'https://repo.staging.metadatacenter.org/templates/9339cac2-a3a7-49f6-9b4f-73a3fa3a5188',
  'schema:name': 'one template metadata',
  'schema:description': '',
  'pav:createdOn': '2019-01-28T16:34:51-0800',
  'pav:createdBy': 'https://metadatacenter.org/users/bcec3d33-faf5-447a-ac96-683d8bf8c7b8',
  'pav:lastUpdatedOn': '2019-01-28T16:40:27-0800',
  'oslc:modifiedBy': 'https://metadatacenter.org/users/bcec3d33-faf5-447a-ac96-683d8bf8c7b8',
  '@id': 'https://repo.staging.metadatacenter.org/template-instances/9308a4f7-e34f-4602-a5ee-2136547f6184'
});
const TREE_DATA = JSON.stringify({
  'Multiple0': {
    '@type': 'element',
    '@name': 'Multiple',
    '@minItems': 0,
    '@maxItems': 10,
    '@itemCount': 0,
    'name': {
      '@type': 'textfield',
      '@name': 'Name',
      '@minItems': 0,
      '@maxItems': 2,
      key: 'name',
      subtype: 'text',
      value: {
        values: ['one', 'two'],
      },
      helpText: 'Name of project',
      hint: 'Enter the name of your project',
      required: false
    },
    'URL': {
      '@type': 'textfield',
      '@name': 'URL',
      '@minItems': 0,
      '@maxItems': 2,
      key: 'url',
      subtype: 'url',
      value: {
        values: ['', ''],
      },
      helpText: 'URL of project',
      hint: 'Enter the URL of your project',
      required: true
    },
    'pies': {
      '@type': 'dropdown',
      '@name': 'Pies',
      key: 'pies',
      value: {
        min: 1,
        max: 2,
        values: ['Rhubarb', 'Black Bottom'],
      },
      helpText: 'pie filling',
      required: false,
      options: [
        {key: 'Rhubarb', value: 'Rhubarb'},
        {key: 'Cherry', value: 'Cherry'},
        {key: 'Key Lime', value: 'Key Lime'},
        {key: 'Black Bottom', value: 'Black Bottom'}
      ],
    },
  },
  'Multiple1': {
    '@type': 'element',
    '@name': 'Multiple',
    '@maxItems': 10,
    '@minItems': 0,
    '@itemCount': 1,
    'name': {
      '@type': 'textfield',
      '@name': 'Name',
      '@minItems': 0,
      '@maxItems': 2,
      key: 'name',
      subtype: 'text',
      value: {
        values: ['one', 'two'],
      },
      helpText: 'Name of project',
      hint: 'Enter the name of your project',
      required: false
    },
    'URL': {
      '@type': 'textfield',
      '@name': 'URL',
      '@minItems': 0,
      '@maxItems': 2,
      key: 'url',
      subtype: 'url',
      value: {
        min: 1,
        max: 1,
        values: ['', ''],
      },
      helpText: 'URL of project',
      hint: 'Enter the URL of your project',
      required: true
    },
    'pies': {
      '@type': 'dropdown',
      '@name': 'Pies',
      key: 'pies',
      value: {
        min: 1,
        max: 2,
        values: ['Rhubarb', 'Black Bottom'],
      },
      helpText: 'pie filling',
      required: false,
      options: [
        {key: 'Rhubarb', value: 'Rhubarb'},
        {key: 'Cherry', value: 'Cherry'},
        {key: 'Key Lime', value: 'Key Lime'},
        {key: 'Black Bottom', value: 'Black Bottom'}
      ],
    },
  },
  'Project': {
    '@type': 'element',
    '@name': 'Project',
    'name': {
      '@type': 'textfield',
      '@name': 'Name',
      key: 'name',
      subtype: 'text',
      value: {
        values: ['one'],
      },
      helpText: 'Name of project',
      hint: 'Enter the name of your project',
      required: false
    },
    'URL': {
      '@type': 'textfield',
      '@name': 'URL',
      key: 'url',
      subtype: 'url',
      value: {
        values: [''],
      },
      helpText: 'URL of project',
      hint: 'Enter the URL of your project',
      required: true
    },
    'pies': {
      '@type': 'dropdown',
      '@name': 'Pies',
      '@minItems': 0,
      '@maxItems': 2,
      key: 'pies',
      value: {
        values: ['Rhubarb', 'Black Bottom'],
      },
      helpText: 'pie filling',
      required: false,
      options: [
        {key: 'Rhubarb', value: 'Rhubarb'},
        {key: 'Cherry', value: 'Cherry'},
        {key: 'Key Lime', value: 'Key Lime'},
        {key: 'Black Bottom', value: 'Black Bottom'}
      ],
    },
  },
  'Subjects': {
    '@type': 'element',
    '@name': 'Subjects',
    '@minItems': 0,
    '@maxItems': 2,
    '@itemCount': 0,
    'date': {
      '@type': 'date',
      '@name': 'Date',
      '@minItems': 0,
      '@maxItems': 2,
      key: 'date',
      subtype: 'date',
      value: {
        values: ['5/22/87', '8/17/85'],
      },
      helpText: 'start date',
      required: false,
      hint: 'Enter the start date of the project'
    },
    'status': {
      '@type': 'radio',
      '@name': 'Status',
      '@minItems': 0,
      '@maxItems': 2,
      subtype: 'radio',
      key: 'status',
      value: {
        values: [0, 3],
      },
      required: false,
      helpText: 'status of project',
      hint: 'begin',
      options: [
        {label: 'begin', value: 0},
        {label: 'start', value: 1},
        {label: 'middle', value: 2},
        {label: 'finish', value: 3}
      ],
    },
    'organism': {
      '@type': 'textfield',
      '@name': 'Organism',
      subtype: 'text',
      key: 'organism',
      value: {
        values: [''],
      },
      required: false,
      helpText: 'The organism on which your experiment acted',
      hint: 'e.g. human'
    }
  },
  'Experiments': {
    '@type': 'element',
    '@name': 'Experiments',
    'description': {
      '@type': 'paragraph',
      '@name': 'Description',
      '@minItems': 0,
      '@maxItems': 2,
      key: 'description',
      value: {
        values: ['', ''],
      },
      helpText: 'Description of project',
      hint: 'Enter the description of your project',
      required: true
    },
    'runs': {
      '@type': 'textfield',
      '@name': 'Run count',
      '@minItems': 0,
      '@maxItems': 2,
      subtype: 'number',
      key: 'runs',
      value: {
        values: ['', ''],
      },
      helpText: 'The number of experimental runs from 4 to 10',
      required: true,
      hint: 'e.g. 5',
      min: 4,
      max: 10
    },
    'contact': {
      '@type': 'element',
      '@name': 'Contact',
      'firstname': {
        '@type': 'textfield',
        '@name': 'First name',
        '@minItems': 0,
        '@maxItems': 1,
        subtype: 'text',
        key: 'first name',
        value: {
          values: [''],
        },
        required: false,
        helpText: 'The first name of your contact'
      },
      'lasttname': {
        '@type': 'textfield',
        '@name': 'Last name',
        subtype: 'text',
        key: 'last name',
        value: {
          values: [''],
        },
        required: false,
        helpText: 'The last name of your contact'
      },
      'email': {
        '@type': 'textfield',
        '@name': 'Email',
        '@minItems': 0,
        '@maxItems': 2,
        subtype: 'email',
        key: 'email',
        value: {
          values: ['', ''],
        },
        helpText: 'Email of contact',
        hint: 'Enter the email address for your contact',
        required: true
      },
      'phone': {
        '@type': 'textfield',
        '@name': 'Phone',
        subtype: 'tel',
        key: 'phone',
        value: {
          values: [''],
        },
        hint: 'e.g. 555-555-1212',
        required: false,
        helpText: 'The phone number of your contact'
      },
      'context': {
        '@type': 'textfield',
        '@name': 'Context',
        subtype: 'text',
        key: 'context',
        value: {
          values: [''],
        },
        required: false,
        helpText: 'The context of your project',
        hint: 'e.g. NCI'
      },
      'classification': {
        '@type': 'textfield',
        '@name': 'Classification',
        subtype: 'text',
        key: 'classification',
        value: {
          values: [''],
        },
        required: false,
        helpText: 'The classification of your project',
        hint: 'e.g. Cancer'
      },
      'address': {
        '@type': 'element',
        '@name': 'Address',
        'phone': {
          '@type': 'textfield',
          '@name': 'Phone',
          subtype: 'tel',
          key: 'phone',
          value: {
            values: [''],
          },
          hint: 'e.g. 555-555-1212',
          required: false,
          helpText: 'The phone number of your contact'
        },
        'context': {
          '@type': 'textfield',
          '@name': 'Context',
          subtype: 'text',
          key: 'context',
          value: {
            values: [''],
          },
          required: false,
          helpText: 'The context of your project',
          hint: 'e.g. NCI'
        },
      }
    },
    'goal': {
      '@type': 'checkbox',
      '@name': 'Goal',
      '@minItems': 0,
      '@maxItems': 1,
      key: 'goal',
      subtype: 'checkbox',
      value: {
        values: [[true, false, true, false], [false, false, true, true]],
      },
      required: false,
      options: [
        {key: 'initial', label: 'initial'},
        {key: 'in process', label: 'in process'},
        {key: 'in committee', label: 'in committee'},
        {key: 'complete', label: 'complete'}
      ],
    }
  }
});

@Injectable()
export class TemplateService {

  formGroup: FormGroup;
  dataChange = new BehaviorSubject<FileNode[]>([]);
  model: object;


  get data(): FileNode[] {
    return this.dataChange.value;
  }

  constructor() {
    this.formGroup = new FormGroup({});
    // this.initialize(this.formGroup);
    this.startParseForm(this.model);
  }

  // /* build the tree of FileNodes*/
  // initialize(formGroup: FormGroup) {
  //   const templateObject = JSON.parse(TEMPLATE_DATA);
  //   const metadataObject = JSON.parse(METADATA_DATA);
  //   const data = this.buildFileTree(templateObject, 0, formGroup, null);
  //   this.dataChange.next(data);
  // }
  //
  // buildFileTree(obj: { [key: string]: any }, level: number, formGroup: FormGroup, parent: FileNode): FileNode[] {
  //   return Object.keys(obj).reduce<FileNode[]>((accumulator, key) => {
  //
  //     const value = obj[key];
  //     const node = new FileNode();
  //
  //     if (value != null) {
  //       if (typeof value === 'object') {
  //
  //         node.key = key;
  //         node.name = value['@name'];
  //         node.formGroup = formGroup;
  //         node.parentGroup = parent ? parent.formGroup : null;
  //         node.parent = parent;
  //         if (value['@maxItems']) {
  //           node.minItems = value['@minItems'];
  //           node.maxItems = value['@maxItems'];
  //           node.itemCount = value['@itemCount'];
  //         }
  //         if (value['@type'] === 'element') {
  //           node.parentGroup = node.formGroup;
  //           node.formGroup = new FormGroup({});
  //           node.children = this.buildFileTree(value, level + 1, node.formGroup, node);
  //         } else {
  //           node.type = value['@type'];
  //           node.subtype = value['subtype'];
  //           node.min = value['min'];
  //           node.max = value['max'];
  //           node.options = value['options'];
  //           node.value = value['value'];
  //           node.help = value['help'];
  //           node.required = value['required'];
  //           node.hint = value['hint'];
  //         }
  //       }
  //     }
  //
  //     return (key.charAt(0) === '@') ? accumulator : accumulator.concat(node);
  //
  //   }, []);
  // }

  schemaOf(node) {
    return (node && node.type === 'array' && node.items) ? node.items : node;
  }

  isContext(key) {
    return (key === '@context');
  }

  setContext(model, item) {

    const setEnum = function(props, obj) {
      Object.keys(props).forEach((key: string) => {
        const value = props[key];
        if (value.enum) {
          obj[key] = value.enum[0];
        }
      });
    }

    const result = {};
    const properties = item.properties;
    Object.keys(properties).forEach((key: string) => {
      const value = properties[key];
      if (value.type === 'object') {
        result[key] = {};
        setEnum(value.properties, result[key]);
      } else {
        if (value.enum) {
          result[key] = value.enum[0];
        }
      }
    });
    model['@context'] = result;
  }


  startParseForm(model: object) {
    const templateObject = JSON.parse(TEMPLATE_DATA);
    console.log('templateObject', templateObject);
    model = {};
    this.parseForm(templateObject.properties, model, '');
  }

  parseForm(properties: object, parentModel: object, parentKey: string) {

    Object.keys(properties).forEach((key: string) => {
      console.log(key, properties[key]);
    });

    Object.keys(properties).forEach((key: string) => {
      const value = properties[key];
      const schema = this.schemaOf(value);

      // Add @context information to instance
      if (this.isContext(key)) {
        this.setContext(mode, value);
        parentModel['@context'] = dms.generateInstanceContext(value);
      } else if (key == '@type') {
        const type = dms.generateInstanceType(value);
        if (type) {
          parentModel['@type'] = type;
        }
      }

      if (!DataUtilService.isSpecialKey(name)) {
        if (dms.schemaOf(value)['@type'] == 'https://schema.metadatacenter.org/core/TemplateElement') {
          // Template Element
          const min = value.minItems || 0;

          // Handle position and nesting within $scope.model if it does not exist
          if (!schemaService.isCardinalElement(value)) {
            parentModel[name] = {};
          } else {
            parentModel[name] = [];
            for (let i = 0; i < min; i++) {
              parentModel[name].push({});
            }
          }

          if (angular.isArray(parentModel[name])) {
            for (let i = 0; i < min; i++) {
              // Indication of nested element or nested fields reached, recursively call function
              $scope.parseForm(dms.propertiesOf(value), parentModel[name][i], name);
            }
          } else {
            $scope.parseForm(dms.propertiesOf(value), parentModel[name], name);
          }


        } else {
          // Template Field
          if (!dms.isStaticField(value)) {
            // Not a Static Field
            const min = value.minItems || 0;

            // Assign empty field instance model to $scope.model only if it does not exist
            if (parentModel[name] == undefined) {
              // Not multiple instance
              if (!schemaService.isCardinalElement(value)) {
                // Multiple choice fields (checkbox and multi-choice list) store an array of values
                if (schemaService.isMultipleChoiceField(value)) {
                  parentModel[name] = [];
                } else {
                  parentModel[name] = {};
                }
                // Multiple instance
              } else {
                parentModel[name] = [];
                for (let i = 0; i < min; i++) {
                  const obj = {};
                  parentModel[name].push(obj);
                }
              }
              // Set default values and types for fields
              dms.initializeValue(value, parentModel[name]);
              // Initialize value type for those fields that have it
              if (schemaService.isTextFieldType(value) || schemaService.isDateType(value) || schemaService.isNumericField(value)) {
                dms.initializeValueType(value, parentModel[name]);
              }
              if (schemaService.isAttributeValueType(value)) {
                // remove the @context entry for this attribute-value field
                // delete the context in the parent
                if (parentModel) {
                  if (parentModel['@context']) {
                    delete parentModel['@context'][name];
                  }
                  parentModel[name] = [];
                }
              }
              dms.defaultOptionsToModel(value, parentModel[name]);
            }
          }
        }
      }
    });
  }

}
